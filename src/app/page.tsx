
import Hero from "./component/views/Hero";
import ProductList from "./component/views/ProductList";
import Promotion from "./component/views/Promotion";
import Subscribe from "./component/views/Subscribe";
import UniqueLayout from "./component/views/UniqueLayout";
import Footer from "./component/views/Footer";
export default function Home() {
  return (
    <>
    {/*First/Hero Section */}
<Hero/>

{/* promition section */}
<Promotion/>

    {/* Product list */}
    <ProductList/>

    {/* details */}
    <UniqueLayout/>

    {/* subscribe section */}
    <Subscribe/>

    {/* Footer */}
    <Footer/>
    </>
  );
}
