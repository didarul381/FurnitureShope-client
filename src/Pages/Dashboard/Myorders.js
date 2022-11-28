import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
const Myorders = () => {

    const{user}=useContext(AuthContext);
    const url=`https://y-pearl-one.vercel.app/bookings?email=${user?.email}`;
    const {data:bookings=[]}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res=await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data=await res.json();
            return data
        }
    })
    return (
        <div>
            <h1 className='mt-5'>My...</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Avater</th>
        <th>Name</th>
        <th>phone</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
    {
        bookings.map((booking,i)=>  <tr key={booking._id}>

            <th>{i+1}</th>
            <div className="avatar">
         <div className="w-24 rounded-full">
        <img src={booking.picture} alt='' /> 
         </div>
         </div>
            <td>{booking.productName}</td>
            <td>{booking.phone}</td>
            <td>{booking.price}</td>
           
            {/* <td>{booking.price}</td> */}
            <td>
              {
                   booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking?._id}`}>
                   <button  className="btn btn-primary btn-sm">
                    Pay
                   </button>
                   </Link>
              }
               {
                 booking.price && booking.paid && <span  className="text-primary">
                 Paid
                </span>
              }
            </td>
          </tr>
          )
    }
     
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;