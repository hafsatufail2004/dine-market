import Image from "next/image"
import event1 from "/public/event1.webp"
import event2 from "/public/event2.webp"
import event3 from "/public/event3.webp"

const Promotion = () => {
  return (
  <section>
    <div className="text-center mt-24">
        <h4 className="text-[#0062f5] font-bold text-sm ">PROMOTIONS</h4>
        <h2 className=" text-4xl text-black font-bold tracking-tight  mt-6 mb-3">Our Promotions Events</h2>
    </div>
{/* promition image and price section */}
<div className="flex justify-center flex-col  md:flex-row">
<div>
{/* Event 1 & discount div is in this div */}
    <div className="h-50 w-[26rem] flex justify-content  gap-x-0.5  bg-[#d6d6d8] mr-8  md:flex-row">
        <div className="pl-6 py-6">
     <h3 className="text-3xl text-black font-bold">Get Up To <span>60%</span></h3>
     <p className="text-gray-900 text-xl">For the summer season</p>
        </div>
        <div><Image src={event1} alt="" className="h-[220px] w-[400px]"/></div>
    </div>

{/* discount div */}
<div className="bg-[#212121] mt-4 box-border h-[12rem] w-[26rem]   flex flex-col  items-center justify-center ">
    <h3 className="text-4xl text-white font-bold text-center pt-8">GET 30% Off</h3>
    <p className="text-white text-xl text-center mt-4">USE PROMO CODE</p>
    <button className="bg-[#474747] text-white text-md font-bold h-10 w-[20rem] m-2 rounded-md">D I N E W E E K E N D S A L E</button>
</div>
</div>

{/* flex sweatshirt male */}
<div className="bg-[#efe1c7] h-70 w-[20rem] mr-4 mt-4 md:mt-0 ml-10 md:ml-0">
    <p className="text-md mt-4 font-medium px-4 ">Flex Sweatshirt</p>
    <div className="flex px-4">
    <h4 className="text-md pr-3"> <del>$100.00 </del> </h4>
    <h3 className="text-xl font-semibold"> $75.00</h3>
    </div>
    <Image src={event2} alt=" "/>
</div>
{/* Flex Push Button Bomber */}
<div className="bg-[#d7d7d9] h-68 w-[20rem] pt-4 px-4 mt-4 md:mt-0 ml-10 md:ml-0">
    <p className="text-xl">Flex Push Button Bomber</p>
    <div className="flex px-4">
    <h4 className="text-md pr-3"> <del>$225.00 </del> </h4>
    <h3 className="text-xl font-semibold"> $190.00</h3>
    </div>
    <Image src={event3} alt=" " />
</div>
</div>
  </section>
  )
}

export default Promotion