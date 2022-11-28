import { useEffect, useState } from "react"

const useSeller = (email) => {
    const[isSeller,setIsSeller]=useState(false);
    const[isSellerLoding,setIsSellerLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://y-pearl-one.vercel.app/users/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                //  if(data.accessToken){
                    // console.log(data.accessToken);
                //    localStorage.setItem('accessToken',data.accessToken)
                setIsSeller(data.isSeller);
                setIsSellerLoding(false)
                  
                //  }
            });
        }

    },[email])
    return[isSeller,isSellerLoding]
}

export default useSeller