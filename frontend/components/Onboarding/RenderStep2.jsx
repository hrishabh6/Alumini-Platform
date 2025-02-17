import Image from 'next/image';
import { Upload } from 'lucide-react';

const RenderStep2 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Personal Details</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Profile Image */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Profile Picture</label>
        <div className="flex items-center gap-4">
          {formData.profileImage && (
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={URL.createObjectURL(formData.profileImage)}
                alt="Profile preview"
                fill
                className="object-cover"
              />
            </div>
          )}
          <label className="flex items-center px-4 py-3 text-sm border rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="w-5 h-5 mr-2" />
            Upload Photo
            <input
              type="file"
              name="profileImage"
              onChange={handleInputChange}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Bio */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-lg text-sm"
          rows={4}
          placeholder="Tell us about yourself..."
        />
      </div>

      {/* Social Links */}
      {['linkedin', 'github', 'portfolio'].map((platform) => (
        <div key={platform}>
          <label className="block text-sm font-medium mb-2 capitalize">{platform}</label>
          <input
            type="url"
            name={platform}
            value={formData[platform]}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
            placeholder={`Your ${platform} URL`}
          />
        </div>
      ))}
    </div>
  </div>
);

export default RenderStep2;
