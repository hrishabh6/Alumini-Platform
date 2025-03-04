"use client";
import React, { useRef, useState } from 'react';
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from '@/lib/config';
import { Button } from './ui/button';
import Image from 'next/image';
import { toast } from '@/hooks/use-toast';

const {
  env: {
    imagekit: { publicKey, urlEndpoint }
  }
} = config;

const ImageUpload = ({ onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const authenticator = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`, {});

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Request failed with a status ${error}`);
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };

    } catch (error) {
      throw new Error(`Authentication failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const ikUploadRef = useRef(null);
  const [file, setFile] = useState(null);

  const onError = (error) => {
    console.error(error);
    toast({
      title: "Image Upload Failed",
      description: `Your image could not be uploaded. Please try again later`,
      variant: "destructive"
    });
  };

  const onSuccess = (res) => {
    setFile(res);
    onFileChange(res.filePath);
    toast({
      title: "Image Uploaded Successfully",
      description: `${res.filePath} has been uploaded successfully`,
    });
  };

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
      <IKUpload
        className='hidden'
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName={`test-upload.webp`}
      />
      <Button className='upload-btn bg-[#232839] hover:bg-[#232839]' onClick={(e) => {
        e.preventDefault();
        if (ikUploadRef.current) {
          // @ts-ignore
          ikUploadRef.current?.click();
        }
      }}>
        {
          loading ? <p>Uploading...</p>
            :
            <>
              <Image
                src={"icons/upload.svg"}
                width={20}
                height={20}
                alt="Upload"
                className='object-contain'
              />
              <p className='text-base text-light-100'>Upload a file</p>
              {file && <p className='upload-filename'>{file.filePath}</p>}
            </>
        }
      </Button>
      {
        file && (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={300}
          />
        )
      }
    </ImageKitProvider>
  );
};

export default ImageUpload;
