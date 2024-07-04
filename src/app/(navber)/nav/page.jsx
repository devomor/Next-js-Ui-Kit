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
       <h1>Navbar-3</h1>
       <nav className="  bg-gray-100 h-14  content-center pr-10" >
       <div className="flex justify-between items-center ">
          <div className="flex pl-10 content-center">
          <Image height={50} width={50} src={instragram} />
          <Image height={50} width={50} src={x} />
          <Image height={50} width={50} src={be} />
          </div>
          <ul className='flex gap-5 uppercas'>
            <li className='px-3 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>Home</li>
            <li className='px-3 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>About</li>
            <li className='px-2 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>Contact</li>
          </ul>
          <button className='bg-[#3A4F39] px-10 h-9 text-fuchsia-50 font-sans rounded-sm' >Buy</button>
       </div>
     </nav>
        <h1>Navbar-4</h1>
       <nav className="  bg-gray-100 h-14  content-center pr-10" >
       <div className="flex justify-between items-center ">
          <div className="flex pl-10 content-center">
          <Image height={50} width={50} src={instragram} />
          <Image height={50} width={50} src={x} />
          <Image height={50} width={50} src={be} />
          </div>
          <ul className='flex gap-5 uppercas'>
            <li className='px-3 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>Home</li>
            <li className='px-3 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>About</li>
            <li className='px-2 p-1 rounded-sm bg-fuchsia-100 hover:bg-lime-600 px-3 p-1 rounded-sm'>
            Contact
             <ul className=' hidden hover:block'>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
            </ul>
            </li>
          </ul>
          <button className='bg-[#3A4F39] px-10 h-9 text-fuchsia-50 font-sans rounded-sm' >Buy</button>
       </div>
     </nav>
    </div>
  );
}

export default Page;
