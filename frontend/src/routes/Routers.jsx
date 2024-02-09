import React from 'react'
import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Doctors from "../pages/Doctors"
import DoctorDetails from "../pages/DoctorsDetail"
import Contact from "../pages/Contact"
import {Routes,Route} from "react-router-dom"
import MyAccount from "../Dashboard/userAccount/myaccount"
import Dashboard from '../Dashboard/doctorAccount/dashboard'
import ProtectedRoutes from "../routes/ProtectedRoute"
const Routers = () => {
  return (
    <>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/> } />
<Route path="/services" element={<Services/>  } />
<Route path="/register" element={<Signup/>  } />
<Route path="/login" element={<Login/>  } />
<Route path="/doctors" element={<Doctors/>  } />
<Route path="/doctors/:id" element={<DoctorDetails/>  } />
<Route path="/contact" element={<Contact/>  } />
<Route path="/user/profile/me" element={<ProtectedRoutes allowedRoles={['patient']} ><MyAccount/></ProtectedRoutes>  } />
<Route path="/doctors/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']} ><Dashboard/></ProtectedRoutes>  } />

    </Routes>    
    </>
      
    
  )
}

export default Routers
