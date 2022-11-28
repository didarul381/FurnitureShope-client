import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DisplayCatagories from '../DisplayCatagories/DisplayCatagories';

const Home = () => {
    // const[catagories,setCatagories]=useState([]);


    const{data:catagories=[]}=useQuery({
        queryKey:['catagories'],
        queryFn:()=> fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
    })
//     useEffect(()=>{
//   fetch('http://localhost:5000/catagories')
//   .then(res=>res.json())
//   .then(data=>setCatagories(data))


    
// },[])

    return (
        <section className='mt-2 mb-4'>
          
       
                <div>
                <div className="hero min-h-screen" >
                  <img src='https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg' alt=''></img>
                  <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
         <h1 className="mb-5 text-2xl font-bold">Creative Home Simpily your <br></br> Furniture</h1>
         <p className="mb-5">Do i have consent to recode this metting gain location,root</p>
        <button className="btn btn-primary">Get Started</button>
    </div>
   </div>
  </div>
                </div >

                <h1 className='text-center text-black-900 my-6'>Popular Furniture By Choice  <br></br>
                        Categories our customers love to check out</h1>
                <div className="flex flex-wrap mx-6 my-12">
                
                <div className='mx-12' >
                        <img src='https://hatil.com/sites/default/files/Bed-Hatil.png' alt=''></img>
                        <p>Bed</p>
                    </div>
                
                    <div className='mx-12' >
                        <img src='https://hatil.com/sites/default/files/Sofa-set.png' alt=''></img>
                        <p>Sofa</p>
                    </div>
                    <div  className='mx-12'>
                    
                        <img src='https://hatil.com/sites/default/files/Center-Table-Hatil.png' alt=''></img>
                        <p>Center Table</p>
                    </div>
                    <div  className='mx-12' >
                    
                        <img src='https://hatil.com/sites/default/files/TV-Cabinet-Hatil.png' alt=''></img>
                        <p>Tv cabinate</p>
                    </div>
                    <div  className='mx-12' >
                    
                        <img src='https://hatil.com/sites/default/files/Open-Shelf-Hatil.png' alt=''></img>
                        <p>Open Salves</p>
                    </div>
                    <div  className='mx-12' >
                    
                    <img src='https://hatil.com/sites/default/files/Dining-Set-Hatil.png' alt=''></img>
                    <p>Dining</p>
                    
                </div>
                    
                </div>
                <h1 className="text-primary my-5 mx-auto text-3xl text-center">Catagories.....</h1>
            <div className='grid gap-6 grid-cols-1  md:grid-cols-2  lg:grid-cols-3 mx-10'>
             {
                catagories.map(catagorie=><DisplayCatagories key={catagorie._id} catagorie={catagorie}>

                </DisplayCatagories>)
             }
            </div>
          
        </section>
        
    );
};

export default Home;