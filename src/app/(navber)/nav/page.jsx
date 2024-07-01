import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import be from '../../../../public/be.png';
import instragram from '../../../../public/instragram.png';
import x from '../../../../public/x.png';

const Page = () => {
  return (
    <div className="p-3 ">
    <h1>Navbar-1</h1>
     <nav className="  bg-gray-100 h-14  content-center pr-10" >
       <div className="flex justify-between items-center ">
          <div className="flex pl-10 content-center">
          <Image height={50} width={50} src={instragram} />
          <Image height={50} width={50} src={x} />
          <Image height={50} width={50} src={be} />
          </div>
          <Image height={50} width={120} src={logo} />
          <button className='bg-[#3A4F39] px-10 h-9 text-fuchsia-50 font-sans rounded-sm' >Buy</button>
       </div>
     </nav>
     <h1>Navbar-2</h1>
     <nav className="  bg-gray-100 h-14  content-center pr-10" >
       <div className="flex justify-between items-center ">
          <div className="flex pl-10 content-center">
          <Image height={50} width={50} src={instragram} />
          <Image height={50} width={50} src={x} />
          <Image height={50} width={50} src={be} />
          </div>
          <Image height={50} width={120} src={logo} />
          <button className='bg-[#3A4F39] px-10 h-9 text-fuchsia-50 font-sans rounded-sm' >Buy</button>
       </div>
     </nav>
    </div>
  );
}

export default Page;
