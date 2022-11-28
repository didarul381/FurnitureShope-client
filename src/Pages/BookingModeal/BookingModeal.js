import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModeal = ({buy}) => {
    const{user}=useContext(AuthContext)
   const {resale_price,name} =buy
    const date=new Date()
    const formetDate=format(date, 'PP');

    const handleBooking =(event)=>{
        event.preventDefault();
        const form=event.target;
      
        const names = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price =form.price.value;
        const location=form.location.value;
        const booking = {
            bookingDate: formetDate,
            productName: name,
            customerName:names,
            email,
            phone,
            price,
            location
        }
    //    console.log(booking);
       fetch('https://y-pearl-one.vercel.app/bookings',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
     .then(data=>{
        console.log(data)
         if(data.acknowledged){
          
            // setTreatment(null)
           toast.success('Booking Confirmed');
            // refetch();
        }else{
            alert(data.message);
         }

       })
        
    }
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
  <div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{buy.name}</h3>
       <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
       <input type="text" placeholder="Type here"readOnly defaultValue={name}  className="input input-bordered w-full " />
       <input type="text" placeholder="Type here"  defaultValue={formetDate} className="input input-bordered w-full " />
       <input  name="name" type="text" placeholder="Your name" readOnly defaultValue={user.displayName} className="input input-bordered w-full " />
       <input name="email" type="email" placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
       <input name="phone" type="text" placeholder="Phone number" className="input input-bordered w-full " />
       <input name="location" type="text" placeholder="Metting location"  className="input input-bordered w-full " />
       <input name="price" type="text" placeholder="price"  readOnly defaultValue={resale_price}  className="input input-bordered w-full " />
       <br></br>
       <input className='w-full btn btn-primary' type="submit" value="submit"></input>

       </form>
       <p>{user?.displayCatagory}</p>
  </div>
</div> 
        </>
    );
};

export default BookingModeal;