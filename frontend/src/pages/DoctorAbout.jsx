import React from 'react'
import { formatDate } from "../utils/formatDate"
const DoctorAbout = () => {
    return (
        <div>

            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold lex items-center gap-2' >About of
                    <span className='text-irisBlue font-bold text-[24px] leading-9' > Munibur Rehman</span>
                </h3>
                <p className="text__para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae explicabo quaerat soluta eveniet quis architecto corporis debitis obcaecati, blanditiis accusamus fuga voluptas, itaque perferendis rem?</p>
            </div>
            <div className='mt-12' >
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold lex items-center gap-2' >Education</h3>
                <ul className='pt-4 md:p-5' >
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px] ' >
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold' >{formatDate("06-21-2008")} - {formatDate("06-21-20012")}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor' >PHD in Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-6 font-medium text-textColor' >New Apoloio Hospital, New York</p>

                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px] ' >
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold' >{formatDate("12-04-2018")} - {formatDate("06-21-2022")}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor' >PHD in Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-6 font-medium text-textColor' >New Apoloio Hospital, New York</p>

                    </li>
                </ul>
            </div>

            <div className='mt-12' >
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold lex items-center gap-2' >Ecperience</h3>

                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5' >
                    <li className='p-4 rounded bg-[#fff9ea]' >
                        <span className='text-yelloColor text-[15px] leading-6 font-semibold' >{formatDate("06-21-2008")} - {formatDate("06-21-20012")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor' >Sr. Surgeon</p>

                        <p className='text-[16px] leading-6 font-medium text-textColor' >New Apoloio Hospital, New York</p>


                    </li>

                    <li className='p-4 rounded bg-[#fff9ea]' >
                        <span className='text-yelloColor text-[15px] leading-6 font-semibold' >{formatDate("06-21-2008")} - {formatDate("06-21-20012")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor' >Sr. Surgeon</p>

                        <p className='text-[16px] leading-6 font-medium text-textColor' >New Apoloio Hospital, New York</p>


                    </li>
                </ul>

            </div>

        </div>
    )
}

export default DoctorAbout
