import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hook/useAdmin';
import useSeller from '../../Hook/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from "../../Pages/Shared/Navbar/Navbar"
const DashboardLayout = () => {
  const{user}=useContext(AuthContext)
  const[isAdmin]=useAdmin(user?.email)
  const[isSeller]=useSeller(user?.email)
    return (
        <div>
             <Navbar></Navbar>
             <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      { ! isAdmin && !isSeller &&

         <li><Link to='/dashboard'>My orders</Link></li>
      }
      {
        isAdmin && <>
         <li><Link to='/dashboard/allusers'> All users</Link></li>
        </>
      }
       {/* <li><Link to='/dashboard'>My orders</Link></li> */}
      {
        isSeller && <>
         {/* <li><Link to='/dashboard'>My orders</Link></li> */}
         <li><Link to='/dashboard/addproduct'>Add products</Link></li>
         <li><Link to='/dashboard/myproduct'>My products</Link></li>
        </>
      }
      
    </ul>
  
  </div>
</div>
  <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;