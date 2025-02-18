import Video_bg from "../assets/Video_bg.mp4";

export default function Hero() {
  return (
    <div>
      <div className='relative flex flex-col w-full h-screen'>
        <video 
          key="hero-video"
          src={Video_bg} 
          playsInline 
          autoPlay 
          loop 
          muted 
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex flex-col justify-center items-center text-center mt-18'>
          <div className='sm:w-[600px] m-6'>
            <h1 className='text-neutral-200 font-bold text-5xl font-sans drop-shadow-lg'>Nutrineuvo</h1>
            <p className='text-neutral-200 font-semibold text-xl font-sans mt-10 drop-shadow-lg'>
            Nutrineuvo is not just a service – it is a reliable partner on your journey towards
            a healthier life. We are online service that offers personalized recipes, automated shopping lists and access to expert help from nutritionists.
            </p>
            <div className='w-64 sm:w-96 flex flex-col justify-around m-auto mt-16 text-sm sm:text-lg'>
              <button className='shadow-[inset_0_0_0_2px_#fff] px-6 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-neutral-200 transition duration-200 m-2'>
                Contact us
              </button>
              <button className='shadow-[inset_0_0_0_2px_#fff] px-6 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-neutral-200 transition duration-200 m-2'>
                Read FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
