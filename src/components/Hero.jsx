import { useTranslation } from 'react-i18next';  
import Video_bg from "../assets/Video_bg.mp4";
import { useNavigate } from 'react-router-dom'; 
export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scrollToFaq = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const goToContacts = () => {
    navigate('/contacts');
  };

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
            <h1 className='text-neutral-200 font-bold text-5xl font-sans drop-shadow-lg'>
              {t('hero.title')}
            </h1>
            <p className='text-neutral-200 font-semibold text-xl font-sans mt-10 drop-shadow-lg'>
              {t('hero.description')}
            </p>
            <div className='w-64 sm:w-96 flex flex-col justify-around m-auto mt-16 text-sm sm:text-lg'>
            <button onClick={goToContacts} className='shadow-[inset_0_0_0_2px_#fff] px-6 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-neutral-200 transition duration-200 m-2'>
               {t('hero.contact')} 
              </button>
              <button 
              onClick={scrollToFaq} 
              className='shadow-[inset_0_0_0_2px_#fff] px-6 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-neutral-200 transition duration-200 m-2'>
                {t('hero.faq')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
