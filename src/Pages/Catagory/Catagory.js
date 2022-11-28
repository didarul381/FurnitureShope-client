import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import BookingModeal from '../BookingModeal/BookingModeal';
import ShowProduct from '../ShowProduct/ShowProduct';

const Catagory = () => {
    const catagories=useLoaderData();
    const[buy,setBuy]=useState(null)
    const products=catagories.products
    useTitle("Catagory")
    // console.log(catagories.categories_name)
    return (
        <section>
        <div className='grid gap-6 grid-cols-1  md:grid-cols-2  lg:grid-cols-3 lg:ml-11 my-7 ml-3'>

            {
                products.map((product,i)=><ShowProduct key={i} product={product} setBuy={setBuy}>

                </ShowProduct>)
            }
           {/* <BookingModeal buy={buy}></BookingModeal> */}
        </div>
          {
            buy &&
            <BookingModeal buy={buy}></BookingModeal>
          }
        </section>
    );
};

export default Catagory;