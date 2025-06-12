import { createFileRoute, Link } from '@tanstack/react-router'
import '../App.css'
import TANSTACK_IMAGE from '../assets/tanstack_img.png';
import logo from '../assets/react.svg'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex justify-between w-full items-center h-screen p-8'>
        <div className='flex justify-around'>
            <img src={TANSTACK_IMAGE} alt='Tanstack Logo' height={300} width={300}/>
            <img src={logo} alt="Logo" height={300} width={300}/>
        </div>
        <div>
            <h1 className='font-extrabold text-7xl text-black my-8'>TANSTACK REACT POC</h1>
            <Link to="/characters">
                <button className='bg-green-700 p-4 border-green-700 rounded text-2xl text-white hover:bg-green-800 cursor-pointer'>Go To Character Table</button>
            </Link>
        </div>
  </div>
  )
  
}
