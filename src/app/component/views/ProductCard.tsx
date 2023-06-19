import Image, {StaticImageData} from "next/image"
import { FC } from "react";
function ProductCard(props:{title:string,price:string,img:StaticImageData}){
  return (
    <div>
        <Image src={props.img} alt="" height={370} width={370}/>
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">{props.price}</p>
    </div>
  )
}

export default ProductCard;