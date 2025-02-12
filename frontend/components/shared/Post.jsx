"use client"
import React, { useState, useMemo } from 'react';
import { Image } from 'lucide-react';
import { Video, Calendar, SmilePlus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PostForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    content: '',
    media: null,
    postType: null
  });

  const isFormValid = useMemo(() => {
    return formData.content.trim().length > 0 || formData.media !== null;
  }, [formData.content, formData.media]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      content: e.target.value
    }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({
      ...prev,
      media: e.target.files[0]
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="p-4 flex items-center gap-3 cursor-pointer">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/image/profilePicture.png" alt="Profile" />
              <AvatarFallback>HJ</AvatarFallback>
            </Avatar>
            <Button 
              variant="outline" 
              className="w-full justify-start text-gray-500 font-normal rounded-full h-12"
            >
              What do you want to talk about?
            </Button>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[800px] p-0 bg-white">
          <DialogTitle className='hidden'>Post Form</DialogTitle>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-6 border-b bg-white relative">
              
              
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/image/profilePicture.png" alt="Profile" />
                  <AvatarFallback>HJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Hrishabh Joshi</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs mt-1"
                  >
                    Post to Anyone
                  </Button>
                </div>
              </div>

              <Textarea
                placeholder="What do you want to talk about?"
                value={formData.content}
                onChange={handleInputChange}
                className="min-h-[300px] resize-none border-none focus-visible:ring-0 text-lg"
              />

              {formData.media && (
                <div className="mt-4 p-2 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    File selected: {formData.media.name}
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 flex items-center justify-between bg-white">
              <div className="flex gap-1">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  onClick={() => document.getElementById('file-upload').click()}
                  className="hover:bg-gray-100"
                >
                  <Image className="h-5 w-5 text-gray-600" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Video className="h-5 w-5 text-gray-600" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Calendar className="h-5 w-5 text-gray-600" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="hover:bg-gray-100">
                  <SmilePlus className="h-5 w-5 text-gray-600" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </Button>
              </div>

              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                disabled={!isFormValid}
              >
                Post
              </Button>
            </div>

            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*,video/*"
            />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostForm;