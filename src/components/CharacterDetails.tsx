import { Link } from '@tanstack/react-router'
import React from 'react'

function CharacterDetails({ data }: any) {

  return (
    <>
        <Link to="/" className='float-right'>
            <button className='bg-green-700 p-4 py-3 border-green-700 rounded text-l font-bold text-white hover:bg-green-800 cursor-pointer'>Back to Home</button>
        </Link>

        <div className="grid grid-flow-col grid-rows-5 gap-4 text-left">
            <div className="row-span-5">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="col-span-3"><p className='font-bold'><span className='uppercase'>Name: </span>{data.name}</p></div>
            <div className="col-span-3"><p className='font-bold'><span className='uppercase'>Status: </span>{data.status}</p></div>
            <div className="col-span-3"><p className='font-bold'><span className='uppercase'>Species: </span>{data.species}</p></div>
            <div className="col-span-3"><p className='font-bold'><span className='uppercase'>Gender: </span>{data.gender}</p></div>
            <div className="col-span-3"><p className='font-bold'><span className='uppercase'>Origin: </span>{data.origin?.name}</p></div>
            
        </div>
    </>
  )
}

export default React.memo(CharacterDetails)