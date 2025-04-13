import React from 'react';
import FacebookFooter from "./icons/FacebookFooter";
import LinkedinFooter from "./icons/LinkedinFooter";
import InstagramFooter from './icons/InstagramFooter';
import { Link } from "react-router-dom";
export default function FooterContent() {
  return (
    <div className='max-w-[1920px] m-auto'>
      <div className='flex flex-col w-full mx-auto'>
        {/* Content Section */}
        <div className='mx-10 my-6 flex flex-col items-center'>
          <h1 className='text-gray-100 text-5xl font-poppins my-4'>Footer</h1>

          <p className='text-gray-100 text-lg text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequuntur. 
            Perspiciatis corporis sequi blanditiis nihil voluptate commodi quibusdam ratione debitis, 
            laboriosam quidem ea amet maiores ipsa aspernatur nesciunt iure ut.
          </p>
        </div>

        {/* Footer socials */}
        <div className='mx-auto max-h-24'>
        <div className='hidden md:flex justify-center my-4 max-w-[800px] mx-auto space-x-4 py-4'> 
          {/* Facebook */}
          <div className="footer-icon transition duration-200 hover:scale-110 hover:border-b-2 hover:border-[#1877F2] p-2">
          <Link to="https://www.facebook.com/profile.php?id=61573966495207"><FacebookFooter /></Link>
          </div>

          {/* Instagram */}
          <div className="footer-icon transition duration-200 hover:scale-110 hover:border-b-2 hover:border-[#E4405F] p-2">
          <Link to="https://instagram.com/nutrineuvo"> <InstagramFooter /> </Link>
          </div>

          {/* LinkedIn */}
          <div className="footer-icon transition duration-200 hover:scale-110 hover:border-b-2 hover:border-[#0A66C2] p-2">
          <Link to="https://linkedin.com/company/nutrineuvo/"><LinkedinFooter /></Link>
          </div>
        </div>
        </div>
        {/* Divider */}
        <div className='divide-y divide-gray-200 w-full mx-4'>
          {/* Legal Section */}
          <div className='pt-4 text-gray-400 text-sm mx-10'>
            <p className='text-center'>
              &copy; 2025 Nutrineuvo.fi. All Rights Reserved. | 
              <a href='/privacy-policy' className='text-gray-200 hover:underline'> Privacy Policy</a> | 
              <a href='/terms' className='text-gray-200 hover:underline'> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
