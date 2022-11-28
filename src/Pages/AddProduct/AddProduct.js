import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const time= new Date();
    const formentDate=format(time,'PP');
    // console.log(formentDate)
    const{user}=useContext(AuthContext)
    const imghostkey=process.env.REACT_APP_imgbb_Key;
    //const{register, formState: { errors },handleSubmit}=useForm();

    const handleBooking =(event)=>{
        event.preventDefault();
        const form=event.target;
        //console.log(data);
       const image=form.img.files[0];
        const formData= new FormData();
      
       formData.append('image',image)
       const url=`https://api.imgbb.com/1/upload?key=${imghostkey}`;
       fetch(url,{
         method:'POST',
         body: formData
       })
       .then(res=>res.json())
       .then(imgData=>{
         if(imgData.success){
        //  console.log(imgData.form.url);

          
           const seller_name=form.name.value;
             const email=form.email.value;
             const name=form.productName.value;
            const categories_name=form.categories_name.value;
            const originalprice=form.orginalPrice.value;
             const resale_price=form.relasePrice.value;
             const desc=form.desc.value;
              const location=form.location.value;
             const  phone=form.phone.value;
             const yearsofuse=form.useTime.value;
            const condition=form.condition.value;
              const picture=imgData.data.url; 
            
         const doctor={
            seller_name,
            email,
            name,
            categories_name,
            originalprice,
            resale_price,
            desc,
            location,
            phone,
            yearsofuse,
            condition,
            picture
         }

         //save doctor information to the database
         fetch('http://localhost:5000/catagories',{
              method:"PUT",
             headers:{
                 'content-type':'application/json',
                //  authorization:`bearer ${localStorage.getItem('accessToken')}`
             },
             body:JSON.stringify(doctor)
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
            //  alert("success")
            //  navigate('/dashboard/managedoctor')
         })
          }
       })
 }

    return (
        <div className='w-96 p-7'>
        <h2 className='text-xl text-purple-600 text-center mb-5'>ADD A Product..</h2>
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
       <input type="name" placeholder="Type here" readOnly defaultValue={user.displayName}  className="input input-bordered w-full " />
       <input name="email" type="email" placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
       <input name="productName" type="text" placeholder="product name" className="input input-bordered w-full" />
       <input name="categories_name" type="text" placeholder="provide valid catagoryName"  className="input input-bordered w-full" />
       <input name="orginalPrice" type="text" placeholder="orginal price"  className="input input-bordered w-full" />
       <input name="relasePrice" type="text" placeholder="Relse price"  className="input input-bordered w-full" />
       <input name="desc" type="text" placeholder="description"className="input input-bordered w-full " />
       <input name="useTime" type="text" placeholder="use time"className="input input-bordered w-full " />
       <input name="condition" type="text" placeholder="condition"className="input input-bordered w-full " />
       <input type="text" placeholder="Type here"  defaultValue={formentDate} className="input input-bordered w-full " />
       <input name="phone" type="text" placeholder="Phone number" className="input input-bordered w-full " />
       <input name="location" type="text" placeholder="Metting location"  className="input input-bordered w-full " />
       <input name="img" type="file" placeholder="image"  accept='img/*'  className="input input-bordered w-full " />
       <br></br>
       <input className='w-full btn btn-primary' type="submit" value="submit"></input>
       

       </form>
    </div>
    );
};

export default AddProduct;


//  name:data.name,
            //  seller_name:data.sellername,
            //   email:data.email,
            //   location:data.location,
            //   picture:imgData.data.url,
            //   originalprice:data.orginal_price,
            //   resale_price:data.relase_price,
            //   yearsofuse:data.usetime,
            //   condition:data.condition,
            //   desc:data.desc,
            //   categories_name:data.catagory,
            //   phone:data.phone