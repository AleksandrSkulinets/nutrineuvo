import FooterContent from "./FooterContent"

export default function Footer() {
  return (
    <footer 
      className='relative h-[500px] bg-[#404040]' 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} 
    >
      <div className='fixed inset-x-0 bottom-0 h-[500px] flex items-center justify-center'>
        <FooterContent />
      </div>
    </footer>

  )
}
