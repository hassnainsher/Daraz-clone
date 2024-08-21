import { Button } from "@mui/material";
import FlashSaleItems from "./flashSaleItems";
const FlashSale = () => {
    return (
      <main className="p-6">
        <div className="container mx-auto mt-6 font-light">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <div className="flex shadow items-center h-24 mt-4">
            <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
              <h4 className="text-lg font-semibold text-orange-500">On Sale Now</h4>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4  flex ml-auto">
              <button className="py-2 px-4 border text-orange-500 hover:bg-orange-500 hover:text-white transition">
                SHOP ALL PRODUCTS
              </button>
              {/* <Button variant="outlined">Outlined</Button> */}
            </div>
          </div>
          <div className="row">
          <FlashSaleItems></FlashSaleItems>
          </div>
        </div>
        
        
      </main>
    );
  };
  
  export default FlashSale;
  