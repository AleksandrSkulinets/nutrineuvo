import React from 'react'

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

      {/* Divider */}
      <div className='divide-y divide-gray-200 w-full mx-4'>
        {/* First Section */}
        <div className='flex justify-center my-4 max-w-[800px] mx-auto'>
          {/* Additional content can go here */}
        </div>
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
