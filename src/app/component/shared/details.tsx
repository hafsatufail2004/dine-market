import { FC } from "react"

interface IProp{
header:string;
description:string;

}

const Details:FC<IProp> = ({header,description}) => {
  return (
    <div className=" box-border h-[200px] w-[200px] text-[#212121]">
        <h4 className="font-bold text-lg">{header}</h4>
<p className="mt-2 text-gray-950 z-0 text-md font-light">{description}</p>
    </div>
  )
}

export default Details;