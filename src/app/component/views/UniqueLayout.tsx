import Details from "../shared/details"
import Image from "next/image"
import hoodie from "/public/whitehoodie.webp"
import { Button } from "@/src/components/ui/button"

const UniqueLayout = () => {

  return (
 <section>
  
<div className="grid justify-end">
    <h2 className="text-5xl text-gray-950 font-bold  mt-24">Unique and <br/> Authentic Vintage <br/> Designer <br/> Jewellery</h2>
  
</div>

<div className="flex md:gap-x-3 mt-14 items-center justify-center px-6 flex-col md:flex-row">

{/* Right content */}
<div className="flex relative ">
<div className="grid  md:px-12 ">
  <Details header="Using Good Quality Materials" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
  <Details header="Modern Fashion Design" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
</div>

<div>
<div className="grid md:px-12">
  <Details header="100% Handmade Products" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
  <Details header="Discount for Bulk Orders
" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
</div>
</div>
<div className="absolute text-gray-200 md:-top-12 md:left-10 md:text-[100px] font-bold -z-10 text-[80px]"><h1> Different From Others</h1></div>
</div>

{/* Left content */}
<div className="flex flex-col md:flex-row">
<Image src={hoodie} alt=""/>

<div className="ml-8 mt-6 md:mt-0">
<h2 className="text-md font-light text-black  md:w-36">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</h2>
<Button className="bg-[#212121] mt-10 px-8 py-4 md:px-6 md:py-9 text-white font-semibold hover:bg-[#212121] border-t-2 border-l-2 border-gray-500">See All  Products</Button>
</div>
</div>
</div>
 </section>
  )
}

export default UniqueLayout