import React from 'react';
import Image from 'next/image';

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, priority = false }) => {
  return (
    <div className="relative">
      {/* Phone frame container */}
      <div className="relative w-[280px] h-[570px] mx-auto">
        {/* Phone bezel */}
        <div className="absolute inset-0 bg-gray-900 rounded-[40px] shadow-xl z-0"></div>
        
        {/* Phone screen */}
        <div className="absolute inset-[10px] rounded-[30px] overflow-hidden bg-white z-10">
          {/* App screenshot */}
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={priority}
              className="rounded-[30px]"
            />
          </div>
        </div>
        
        {/* Phone notch */}
        <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] bg-gray-900 rounded-b-[14px] z-20"></div>
        
        {/* Home indicator */}
        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-white rounded-full z-20"></div>
      </div>
    </div>
  );
};

export default PhoneFrame; 