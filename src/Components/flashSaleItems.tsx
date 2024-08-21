import { Laptop } from "@mui/icons-material";
import FlashSaleCards from "./flashsalecards"

const FlashSaleItems = ()=>{
    const laptop = "https://img.drz.lazcdn.com/static/pk/p/e75628b2adcefb9cebd0411427034857.png_400x400q80.png_.webp";
    const p47 = 'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_400x400q80.jpg_.webp'
    const m10 = 'https://img.drz.lazcdn.com/static/pk/p/a7026d307044f3b89ca7f538e33a0bd6.jpg_400x400q80.jpg_.webp'
    const wireless = 'https://img.drz.lazcdn.com/static/pk/p/c504bb28980d63d1d38c99cba7f1c89a.jpg_400x400q80.jpg_.webp'
    const watch = 'https://img.drz.lazcdn.com/static/pk/p/062225b418991cfcbee26f2731025f5c.jpg_400x400q80.jpg_.webp'
    const headset = 'https://img.drz.lazcdn.com/static/pk/p/48e3655975103baaf550aa7716f307aa.jpg_400x400q80.jpg_.webp'
    return(
        <main>
            <div className="container">
                <div className="row shadow">
                    <div className="col-md-2"><FlashSaleCards price={12998} orignalprice={28000} img={laptop}  dtb={"Acer ChromeBook R11 | Touch Screen | 16GB"} dsp={"-54%"}></FlashSaleCards></div>
                    <div className="col-md-2"><FlashSaleCards price={744} orignalprice={3900} img={p47}  dtb={"P47 Wireless Headset Bluetooth Foldable..."} dsp={"-81%"}></FlashSaleCards></div>
                    <div className="col-md-2"><FlashSaleCards price={787} orignalprice={4000} img={m10}  dtb={"Acer ChromeBook R11 | Touch Screen | 16GB"} dsp={"-80%"}></FlashSaleCards></div>
                    <div className="col-md-2"><FlashSaleCards price={398} orignalprice={699} img={wireless}  dtb={"Acer ChromeBook R11 | Touch Screen | 16GB"} dsp={"-43%"}></FlashSaleCards></div>
                    <div className="col-md-2"><FlashSaleCards price={1349} orignalprice={5999} img={watch}  dtb={"Acer ChromeBook R11 | Touch Screen | 16GB"} dsp={"-78%"}></FlashSaleCards></div>
                    <div className="col-md-2"><FlashSaleCards price={600} orignalprice={2000} img={headset}  dtb={"Acer ChromeBook R11 | Touch Screen | 16GB"} dsp={"-70%"}></FlashSaleCards></div>
                    

                </div>
            </div>
        </main>
    )
}
export default FlashSaleItems;