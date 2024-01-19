import React from 'react'
import {doctors} from "../assets/data/doctor"
import DoctorCard from "../components/Doctors/DoctorCard"
import Testimonial from '../components/Testimonial/Testimonial'
const Doctors = () => {
  return (
    <>
    <section className='bg-[#fff9ea]' >
      <div className="container text-center">
        <h2 className='heading' >Find a Doctor</h2>
        <div className='max-w-[570px] mt-[36px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between' >
          <input type='search' className='py-2 pl-2 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor ' placeholder="Search Doctor" />
<button className='btn mt-0 rounded-[0px] rounded-r-md' >Search</button>
        </div>
      </div>
    </section>
<section>
  <div className="container">
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4' > 
      {doctors.map((doctor)=> 
      <DoctorCard key ={doctor.id} doctors={doctor} />
      )}
    </div>
  </div>
</section>

<section>
  <div className="container">
  <div className='xl:w-[470px] mx-auto'>
            <h1 className='heading text-center'>What our patients say</h1>
            <p className='text__para text-center' >World-class care for everyone. Our Health System offers unmatched,expert health care.</p>
          </div>
          <Testimonial/>
  </div>
</section>

    </>

  )
}

export default Doctors
