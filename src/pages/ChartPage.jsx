import ChartCard from './pageData/chart/ChartCard'
import { Icon } from '@iconify/react'
import ChartDelivery from './pageData/chart/ChartDelivery'
import Buttons from '../../public/components/Buttons'
import img1 from "../assets/logos_mastercard.png"
import Delivery from './pageData/products/Delivery'
import { Link, Outlet } from 'react-router-dom';
function ChartPage() {
  return (
    <>
    <div className=''>
     <header className='lg:mt-[79px]'>
    <ul className='hidden lg:flex justify-between'>
      <li>
       <p className='lg:text-[48px] font-semibold lg:ml-[128px]'>  My Cart </p>
      </li>
      <li>
      <Link to="/">
       <div className='flex space-x-[23px] ml-[433px] mb-[2px] p-[14px] rounded-2xl border-2 border-slate-200 mr-[68px]'>
        <Icon icon='ep:back' className='text-[24px]'/>
        <p> Continue shopping </p>
       </div>
       </Link>
      </li>
    </ul>
    <div className='sm:ml-[40px] sm:space-x-[20px] ml-[36px] mt-[17px] hidden sm:flex mb-[33px] space-x-[56px]'>
            <div className=''>
            <Link to="/">
                 <Icon icon='ep:back' className='hidden sm:flex text-[24px] '/>
                 </Link>
            </div>
             <div className='mr-[56px]'>
                <p className='text-[20px] font-semibold sm:text-center'> My Cart </p>
             </div>      
        </div>
   
     </header>
     <div className='ml-[36px]  lg:ml-[128px] lg:mr-[68px]'>
      <ChartCard/>
    </div>
    <div className='hidden sm:flex ml-[36px] sm:ml-[0px] sm:justify-center'>
     <Delivery/>
    </div>
    <div className='hidden lg:flex'>

    
    <div className=' lg:ml-[128px] lg:mr-[68px] lg:mt-[115px]   '>
    <ChartDelivery/>
    <div className=' lg:max-w-[873px] lg:max-h[312px] lg:mt-[150px] lg:mb-[200px] lg:py-[76px] lg:pl-[35px] lg:bg-[#EEEDED] lg:rounded-lg'>
    <div className=''>
          <p className='text-[15px] mb-[14px]'>Card number</p>
          <button type='input' className='flex mb-[14px]  space-x-[79px] max-w-[305px] border-slate-300 max-h-[38px] border py-[20px] px-[17px]'>
            <p className='text-[12px] text-[#8B8787] -mt-2 opacity-25 '>XXXX XXXX XXXX XXXX</p>
            <img src={img1} className='-mt-2'/> 
          </button>
        </div>
        <div>
           <ul className='flex space-x-[70px]'>
             <li>
                <p className='text-[15px] mb-[14px]'> Expiration </p>
                <Buttons label='07/01' ButtonClassName='-mt-2 -ml-[8px] text-center' className='py-[12px] px-[36px] text-center max-w-[97px] max-h-[38px] border border-slate-300'/>
              </li>
            <li> 
            <p className='text-[15px] mb-[14px]  '> CVC </p>
            <Buttons label='065' ButtonClassName='-mt-2' className='py-[12px] px-[36px] max-w-[97px] mb-[77px] text-center max-h-[38px] border border-slate-300'/>
            </li>
           </ul>

        </div>
        <Buttons label='Confirm Payment' ButtonClassName='-mt-2' className='px-[84px] py-[14px]  text-center rounded-lg max-h-[45px] max-w-[302px] bg-[#06630F] text-white '/>

    </div>

    </div>
    </div>
   
    </div>
  
  
  
    
    </>
  )
}

export default ChartPage
