import React from 'react'
import { LoadImages,SearchImages } from './components/api'
import Image from './components/image'
import { useState} from 'react';
import './App.css';

const App = () => {
  const [query,setQuery] = useState();
  const [searchQ,setSearch] = useState();
  const data = LoadImages();

  const search = () => {
    setSearch(query)
  }
  const searchData = SearchImages(searchQ);
  console.log(searchData)
  return (
    <div>
           
        <div className='bg-gray-900 h-2 items-center py-10  flex justify-center'>
        <h1 className='lg:text-xl sm:float-right sm:text-xs font-bold text-white mr-7 '>Search Images</h1>
        <input className="bg-gray-50 border border-gray-300 text-sm indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl sm:float-left" type="text" placeholder="Search Anything..." onChange={(e) => setQuery(e.target.value)}/>
        <button className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400" onClick={search}>Search</button>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto px-4'>
         {searchQ ? searchData.map((img,key)=>(
         <Image key={img.id} {...img}/>
      )): data.map((img,key)=>(
        <Image key={img.id} {...img}/>
     ))}

     </div> 
      
    </div>
  );
}

export default App