import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
//import { useQuery } from '@tanstack/react-query';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyProduct = () => {
    const{user}=useContext(AuthContext)
    // const catagories=useLoaderData();
    // const products=catagories.products
    // console.log(products);
      const[catagories,setCatagories]=useState([]);
      const[catagoriesone,setCatagoriesone]=useState([]);
      const[catagoriestwo,setCatagoriestwo]=useState([]);
   
         useEffect(()=>{
        fetch('https://y-pearl-one.vercel.app/catagories')
        .then(res=>res.json())
        .then(data=>{
          console.log(data[0].products)
          // data.forEach(p => {
          //   console.log(p.products)
          //   setCatagories(p.products)
            
          // });
          setCatagories(data[0].products)
          setCatagoriesone(data[1].products)
          setCatagoriestwo(data[2].products)
          

        })
       
      },[])

      const handleDelet =(name,categories_name)=>{
         const names=name
          const categories_names=categories_name;
           const product={
            names,
            categories_names
           }

         console.log(name)
         fetch('https://y-pearl-one.vercel.app/catagories',{
           
          method:"PUT",
         headers:{
             authorization:`bearer ${localStorage.getItem('accessToken')}`
         },
         body:JSON.stringify(product)
         
      })
      .then(res=>res.json())
         .then(data=>{
            console.log(data)
            // refetch();
            if( data.deletedCount>0){
             toast.success('Delete success full')
                  
                  // refetch();
             }
          
           
         })
    
      }
     

    return (
        <div>
            <h1>My products...</h1>
            <div className="overflow-x-auto">
              <h3>{catagories.length}</h3>
              <table className="table w-full my-4">
    
    <thead>
      <tr>
        <th></th>
        <th>Avater</th>
        <th> ProductName</th>
        <th> Seller Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
     catagories.map((product,i)=> product.email===user.email && <tr key={i}>
           
              <th>{i+1}</th>
              <td>
              <div className="avatar">
         <div className="w-24 rounded-full">
        <img src={product.picture} alt='' /> 
         </div>
         </div>
              </td>
              <td>{product.name}</td>
              <td>{product.seller_name}</td>
              <td>{product.email}</td>
              <td>{product.status}</td>
              <td><button className='btn btn-primary btn-sm'>Advertisement</button> </td>
              <td>
                <button onClick={()=>handleDelet(product.name,product.categories_name)} className='btn btn-primary btn-sm'>Delet</button> 
                </td>
            </tr>)
     }
      
     
    </tbody>
  </table>

{/* catagory therr*/}
<table className="table w-full ">
    
    <thead>
      
    </thead>
    <tbody>
     {
     catagoriesone.map((product,i)=> product.email===user.email && <tr key={i}>
           
              <th>{i+1}</th>
              <td>
              <div className="avatar">
         <div className="w-24 rounded-full">
        <img src={product.picture} alt='' /> 
         </div>
         </div>
              </td>
              <td>{product.name}</td>
              <td>{product.seller_name}</td>
              <td>{product.email}</td>
              <td>{product.status}</td>
              <td><button className='btn btn-primary btn-sm'>Advertisement</button> </td>
              <td>
                 <button className='btn btn-primary  btn-sm'>Delet</button> 
                </td>
            </tr>)
     }
      
     
    </tbody>
  </table>

  <table className="table w-full">
    
    <thead>
      <tr>
        
      </tr>
    </thead>
    <tbody>
     {
     catagoriestwo.map((product,i)=> product.email===user.email && <tr key={i}>
           
              <th>{i+1}</th>
              <td>
              <div className="avatar">
         <div className="w-24 rounded-full">
        <img src={product.picture} alt='' /> 
         </div>
         </div>
              </td>
              <td>{product.name}</td>
              <td>{product.seller_name}</td>
              <td>{product.email}</td>
              <td>   
                <button className='btn btn-primary btn-sm'>Advertise</button> 
                </td>
              <td>
              
             
                <button className='btn btn-primary btn-sm'>Delet</button> 
                </td>
            </tr>)
     }
      
     
    </tbody>
  </table>
   
</div>
        </div>
    );
};

export default MyProduct;



// onClick={()=>setDeletDoctor(doctor)}