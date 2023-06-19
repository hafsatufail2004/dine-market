
import ProductCard from "./ProductCard"
import white from "@/public/white.png"
import hero from "@/public/camry.png"
import black from "@/public/black.png"

const ProductList = () => {
  return (
    <div>

<div className="text-center mt-24">
        <h4 className="text-[#0062f5] font-bold text-[12px]">PRODUCTS</h4>
        <h2 className=" text-4xl text-gray-900 font-bold tracking-tight  mt-2 mb-3">Check What We Have</h2>
    </div>
  


    <div className="flex md:justify-evenly mt-10 flex-col md:flex-row">
      <ProductCard title="Flex Sweatshirt" price="$175" img={black}/>
      <ProductCard title="Cameryn Sash Tie Dress" price="$545" img={hero} />
      <ProductCard title="Brushed Raglan Sweatshirt" price="$195" img={white}/>
       </div>

      </div> 
  )
}

export default ProductList