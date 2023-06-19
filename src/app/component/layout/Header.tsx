import logo from "/public/Logo.webp"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"
import { Input } from "../../../components/ui/input"

const Header = () => {
  return (<>
<div className="flex justify-between">
  <Image src={logo} alt="logo" className="w-40 md:hidden px-6 py-8 "/>
   <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8 px-12 py-6">
              &#9776;
 </button>
</div>
   

    <div className="md:flex md:justify-between items-center px-6 py-8 sm:scroll-smooth hidden" aria-label="main" >
    <Image src={logo} alt="logo" className="w-40"/>
<ul className="flex gap-x-12 text-lg hover:opacity-90">
    <li>
        <Link href={''}>   Female  </Link>
     </li>

     <li>
        <Link href={''}>  Male  </Link>
     </li>

     <li>
        <Link href={''}>  Kids  </Link>
     </li>

     <li>
        <Link href={''}> All Products     </Link>
     </li>
     <div className="flex flex-1">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"></path></g></svg>
<Input type="input" placeholder="What you looking for" className="w-70 h-7 border-gray-300 rounded text-sm text-gray-300"/>
     </div>
</ul>
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><ShoppingCart/></div>
    </div>
 </>
  )
}

export default Header