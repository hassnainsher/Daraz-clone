import Carousal from "./Components/carousal"
import Categoies from "./Components/Categories/categorie";
import CustomerCare from "./Components/customercare/customercare";
import Lastpart from "./Components/customercare/lastpart";
import PaymentMethods from "./Components/customercare/paymentMethods";
import FlashSale from "./Components/flashSale";
import Foot from "./Components/footer";
import JustForYou from "./Components/JustForYou/justForYou";
import Navbar from "./Components/navbar"

export default function App(){
  return(
    <main>
      <Navbar></Navbar>
      <Carousal></Carousal>
      <FlashSale></FlashSale>
      <Categoies></Categoies>
      <JustForYou></JustForYou>
      <CustomerCare></CustomerCare>
      <PaymentMethods></PaymentMethods>
      <Lastpart></Lastpart>
      <Foot></Foot>
    
    </main>
  );
}