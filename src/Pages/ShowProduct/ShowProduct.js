import React from 'react';

const ShowProduct = ({product,setBuy}) => {
    const{picture,
      name,
      originalprice,
       desc,location,
       resale_price,
      condition,
      yearsofuse

      }=product
    return (
        
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="card-title text-sm">Product Name:{name}</p>
     <div className='grid grid-cols-2 gap-4'>
     <div>
     <p>Condition:{condition}</p>
     <p>Orginal price:{originalprice}</p>
     <p>relase Price:{ resale_price?resale_price:'Look likee new'}</p>
     </div>
     <div>
       <p>Use Time:{yearsofuse}</p>
          <p>Desc{desc}</p>
          <p>Location{location}</p>
     
     </div>
     </div>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
      <label htmlFor="booking-modal" className="btn  btn-primary"
        onClick={()=>setBuy(product)}
      
      >Buy Now</label>
    </div>
  </div>
</div>  
        
    );
};

export default ShowProduct;
