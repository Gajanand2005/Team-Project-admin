import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { FaPlus } from 'react-icons/fa6'
import cart from '../../assets/cart.jpg'

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Dashboard = () => {


    const [isOpenOrderProduct, setIsOpenOrderProduct]= useState(null);

    const isShowOrderdProduct =(index)=>{
        if(isOpenOrderProduct===index){
            setIsOpenOrderProduct(null);
        }else{
            setIsOpenOrderProduct(index);
        };
}
  return (
   <>
   <div className='w-full py-2 px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between'>
    <div className='info'>
       <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning,<br /> Cameron </h1>
       <p>Here's What happening on your store today. See the statistics at once.</p>
    <br/>
       <Button className="btn-blue !capitalize"><FaPlus/>Add Product</Button>
    </div>
  <img src={cart} alt="Cart" className="w-[300px]" />
   </div>
    <DashboardBoxes/>
    <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
    
    <div className='flex items-center justify-between px-5 py-5 '>
      <h2 className='text-[18px] font-[600]'>Recent Orders </h2>
    </div>



                      <div className="relative overflow-x-auto mt-5 pb-5">
                <table className="w-full text-sm text-left rtl:text-right text-black ">
                  <thead className="text-xs text-black uppercase  ">
                    <tr>
                       <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       PinCode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Total
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       User Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Order Status
                      </th>
                       <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b  dark:border-gray-700 border-gray-200 font-[600]">
                      <td className="px-6 py-4">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=>isShowOrderdProduct(0)} >
                          {
                            isOpenOrderProduct === 0 ? <FaAngleUp className='text-[18px] text-[#000]' /> : <FaAngleDown className='text-[18px] text-[#000]' />
                          }
                         </Button>
                      </td>
                      <td className="px-6 py-4">123456</td>
                      <td className="px-6 py-4">4564tyut56</td>
                      <td className="px-6 py-4">Gagan</td>
                      <td className="px-6 py-4">4564564564</td>
                      <td className="px-6 py-4 "><span className='block w-[300px]'>MOnn H.NO 29 outside the earth</span> </td>
                      <td className="px-6 py-4">12345</td>
                      <td className="px-6 py-4">1200</td>
                      <td className="px-6 py-4">Gagan@gmail.com</td>
                      <td className="px-6 py-4">12345646</td>
                      <td className="px-6 py-4"><Badge status="delivered" /></td>
                      <td className="px-6 py-4 whitespace-nowrap">12-2-2025</td>
                    </tr>
                    {
                      isOpenOrderProduct=== 0 && (
                        <tr>
                      <td className='bg-[#f1f1f1] pl-20' colSpan={6}>
                        <div className='relative overflow-x-auto'>
                        <table className="w-full text-sm text-left rtl:text-right text-black ">
                  <thead className="text-xs text-black uppercase  ">
                    <tr>
                     
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Product Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Product Title 
                       </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Image
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Qty
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Price
                      </th>
                     
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                       Sub total 
                      </th>
                     </tr>
                     
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b  dark:border-gray-700 border-gray-200 font-[600]">
                      
                      <td className="px-6 py-4">123456</td>
                      <td className="px-6 py-4 whitespace-nowrap">A -lien color Blue shari for ladiys this is cool</td>
                      <td className="px-6 py-4">
                        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/90-home_default/hummingbird-cushion.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md'/>
                      </td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4 ">1200 </td>
                      <td className="px-6 py-4">1200</td>
                     
                    </tr>

                    <tr>
                      <td className='bg-[#f1f1f1]' colSpan={6}>
                        
                      </td>
                    </tr>
                    
                  </tbody>
                   
                 
                </table>
                </div>
                      </td>
                    </tr>
                      )
                    }


                  
                    
                    
                  </tbody>
                </table>
              </div>
   




    </div>
   </>
  )
}

export default Dashboard
