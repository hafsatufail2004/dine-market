import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import hero from "@/public/hero.webp"
import bazar from "@/public/tags/bazar.webp"
import tag2 from "@/public/tags/Featured2.webp"
import tag3 from "@/public/tags/Featured3.webp"
import tag4 from "@/public/tags/Featured4.webp"

const Hero = () => {

  return (
 <section className="flex flex-col gap-y-10 py-6 lg:flex-row">
<div className="flex-1 md:ml-20">

<Badge className="px-5 py-2 rounded-xl bg-[#e1edff] text-md font-bold text-[#0000ff]">Sale 70%</Badge>
<h1 className="scroll-m-20 text-5xl font-bold tracking-tight text[#212121] lg:text-6xl mt-6 mb-3">
An Industrial<br/> Take on<br/> Streetwear
    </h1>

    <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-600">Anyone can beat you but no one can<br/> beat your outfit as long as you wear<br/> Dine outfits.</p>

    <Button className="bg-[#212121] mt-10 px-6 py-9 text-white font-semibold text-lg hover:bg-[#212121] border-t-2 border-l-2 border-gray-500"><ShoppingCart className="w-5 h-5 mr-4"/> Start <br/>Shopping</Button>

<div className="flex mt-5 gap-x-4 items-start md:justify-normal">
<Image src={bazar} alt=" "/>
<Image src={tag2} alt="tag2 "/>
<Image src={tag3} alt="tag3"/>
<Image  src={tag4} alt=""/>
  </div>
  </div>

{/* Right div */}
<div className="flex-1 ">

  <div className="flex relative h-[600px] items-center justify-center bg-[#ffece3] rounded-full">
    <Image src={hero} alt="lady" className="absolute -mt-16 " height={800} width={800} />
      </div>
</div>
 </section>
  )
}

export default Hero