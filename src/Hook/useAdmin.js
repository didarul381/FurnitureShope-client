import { useEffect, useState } from "react"

const useAdmin=(email)=>{

    const[isAdmin,setIsAdmin]=useState(false);
    const[isAdminLoding,setIsAdminLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://y-pearl-one.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                //  if(data.accessToken){
                    // console.log(data.accessToken);
                //    localStorage.setItem('accessToken',data.accessToken)
                   setIsAdmin(data.isAdmin);
                   setIsAdminLoding(false)
                  
                //  }
            });
        }

    },[email])
    return[isAdmin,isAdminLoding]
}
export default useAdmin;