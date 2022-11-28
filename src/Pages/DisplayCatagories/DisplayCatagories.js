import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCatagories = ({catagorie}) => {
    const{_id,categories_name,img}=catagorie
    return (
        
        <div>  
            
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
     <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title"> <Link to={`/category/${catagorie._id}`}>{categories_name}</Link></h2>
     <p> please Explore Catagory...</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>  
        
           
        </div>
    );
};

export default DisplayCatagories;