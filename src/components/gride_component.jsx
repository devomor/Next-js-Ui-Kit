import Image from 'next/image';
import logo from '../../public/Logo.png';
const GrideComponent = ({ key,title,description}) => {
    return (
        <div key={key} className=' p-2  w-56 rounded-md shadow-2xl bg-slate-100 '>
            <Image height={200}  width='full' src={logo}/>
            <div className='h-2'></div>
            <h1 className=' font-sans text-xl '>{title}</h1>
            <p className=' font-sans line-clamp-3 overflow-hidden text-ellipsis'>{description}</p>
              <div className='h-2'></div>
            <center>
                <button className=' bg-green-500 px-7 p-1 rounded-md shadow-sm text-fuchsia-50 hover:bg-red-500'>Details</button>
            </center>
        </div>
    );
}

export default GrideComponent;
