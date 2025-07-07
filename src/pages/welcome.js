import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'
import { Hello } from "../data/Sambutan"


function Welcome() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-sky-800'>
    <div className=' text-sky-400  text-5xl -mb-12 relative animate-muncul '>
    {parse(Hello.content)}
      <div className='relative flex mx-auto h-8 w-1/2 mt-12 text-center items-center justify-center rounded-full bg-sky-400 text-sm font-medium text-white hover:bg-sky-500 animate-munculTombol hover:cursor-pointer' 
            onClick={()=>navigate('/home')}>
        {parse(Hello.data)}
      </div>
    </div>
    <p className='fixed bottom-8 right-20 animate-home transition-all delay-[3s] text-2xl text-slate-400'>Oleh : Syariful Amar</p>
    </div>
    
  )
}

export default Welcome