import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const{data:users=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res= await fetch('http://localhost:5000/users');
            const data=await res.json();
            return data;
        }
    })

    const handleAdmine =(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
          method:"PUT",
          headers:{
              authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
        //    console.log(data)
          if(data.modifiedCount>0){
              toast.success('success')
              refetch();
  
          }
        })
      };
      const handleDelet=(id)=>{
      console.log(id);
           fetch(`http://localhost:5000/users/${id}`,{
           
            method:'DELETE',
           headers:{
               authorization:`bearer ${localStorage.getItem('accessToken')}`
           }
           
        })
        .then(res=>res.json())
           .then(data=>{
              console.log(data)
              // refetch();
              if( data.deletedCount>0){
               toast.success('Delete success full')
                    
                    refetch();
               }
            
             
           })
      }
    return (
        <div>
            <h2>All users..</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
     {
        users.map((user,i)=> <tr>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {/* {user.role==='seller' && */}
        <td>{user?.role!=='admin' && <button onClick={()=>handleAdmine(user._id)} className='btn btn-primary'>{user.role}</button>}</td>
     {/* } */}
       
        <td>{ user?.role!=='admin' && <button onClick={()=>handleDelet(user._id)} className='btn btn-xl btn-danger'>Delet</button>}</td>
      </tr>)
     }
     
     
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;