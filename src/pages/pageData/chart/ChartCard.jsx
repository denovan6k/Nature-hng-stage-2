import ChartData from "./ChartData"
import { Icon } from '@iconify/react'
const ChartCard = () => {
  return (
    <>
    <div className="">
    
    
      </div>
           <ul className="hidden lg:flex lg:text-[16] lg:mt-[38px] lg:font-semibold lg:text-gray-600 ">
            <li>
            PRODUCT DETAILS
            </li>
            <li className="ml-[205px]">
            QUANTITY
              </li>
              <li className="ml-[116px]">
              PRICE
              </li>
              <li className="ml-[116px]">
              TOTAL
              </li>
           </ul>
               <div>
               <ul className=''>
      {ChartData.map((val, index) => (
          <li key={index} 
          className=''
          >
            {/* <Link to={val.link}> */}
              <div className= ''
 >
             <ul className="mb-[20px] sm:justify-center flex lg:flex lg:mt-[23px] lg:mb-[41px]">
                  <li className="lg:max-w-[171px] lg:max-h-[134px] max-w-[96px] max-h-[75px]">
                       {val.img}
                  </li>
                   <li>
                    <div className="text-[11px] mt-[18px] ml-[8px] lg:ml-[22px] lg:mt-[38px] lg:text-[16px]">
                 <div> {val.title} </div>   
                 <div className=" mt-[3px]  lg:mt-[10px]">{val.weight}</div>
                 <span><Icon icon='lets-icons:trash' className="hidden lg:flex lg:text-[28px]  lg:mt-[12px]"/></span>
                 <div className=" hidden md:flex mt-[6px] font-semibold" > {val.price} </div>
                    </div>
                   
                   </li>
                   <li className="flex space-x-2 mt-[25px] ml-[73px] lg:ml-[70px] lg:mt-[50px]">
                    <div> - </div>
                    <div className="max-w-[32px]  -mt-1 max-h-[32px] px-[12px] py-[6px] text-center border border-slate-200"> <span className="mt-2">{val.number} </span></div>
                    <div>+</div>
                   </li>
                   <li className="hidden lg:flex lg:ml-[116px] lg:mt-[54px] lg:font-semibold ">
                      {val.price}
                   </li>
                   <li className="hidden lg:flex lg:ml-[116px] lg:mt-[54px] lg:font-semibold">
                      {val.total}
                   </li>
                   
               </ul>
               {/* <div className="h-0 w-[828px] mt-[42px] border-t border-gray-300"></div> */}
              </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
               </div>
    
    </>
  )
}

export default ChartCard