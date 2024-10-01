import Image from 'next/image';
import logoSvg from '../assets/logo.svg'

export default function Header() {
    return (
      <header className='w-full px-8 m-0 mx-auto  max-x-screen-xl'>
        
        <Image src={logoSvg} alt='logi'/>
      </header>
    );
  }