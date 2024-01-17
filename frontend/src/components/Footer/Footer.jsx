import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from "react-icons/ai"

const socialLinks = [
  {
    path:"https://www.Youtube.com",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-4' />
  },
  {
    path:"https://www.Youtube.com",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-4' />
  },
  {
    path:"https://www.Youtube.com",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-4' />
  },
  {
    path:"https://www.Youtube.com",
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-4' />
  },
]

const quickLinks = [
  {path:"/home",
  display:"Home"
  },
  {path:"/",
  display:"About Us"
  },
  {path:"/services",
  display:"Services"
  },
  {path:"/",
  display:"Blog"
  },
]


const quickLinks2 = [
  {
    path:"/find-a-doctor",
    display:"Find a Doctor"
  },
  {
    path:"/",
    display:"Request an Appointment"
  },
  {
    path:"//",
    display:"Find a Location"
  },
  {
    path:"/",
    display:"Get a Opinion"
  },
  
]


const quickLinks3 = [
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact Us"
  }
]


const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-18' >
      <div className='container' >
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]' >
          <div>
            <img src={logo} />
            <p className='mt-4 text-[16px] leading-7 font-[400] text-textColor ' >Copyright Ⓒ {year} developed by Umar Aqeel all right reserved </p>
          <div className='flex items-center gap-3 mt-4' >
            {
              socialLinks.map((link,index)=><Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' to={link.path} key={index} >
                {link.icon}
              
              </Link>)
            }
            </div>  
          
          </div>

<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ' >Quick Links</h2>
<ul>
  {
    quickLinks.map((item,index)=><li key={index} className='mb-4' >
      <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor' >{item.display}</Link>

    </li>)
  }
</ul>

</div>

<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ' >I want to:</h2>
<ul>
  {
    quickLinks2.map((item,index)=><li key={index} className='mb-4' >
      <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor' >{item.display}</Link>

    </li>)
  }
</ul>

</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ' >Support</h2>
<ul>
  {
    quickLinks3.map((item,index)=><li key={index} className='mb-4' >
      <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor' >{item.display}</Link>

    </li>)
  }
</ul>

</div>


        </div>
      </div>
    </footer>
  )
}

export default Footer
