import Daraz from '../../assets/daraz.jpg';
import AppStore from '../../assets/appstore.jpg';
import GooglePlay from '../../assets/gplay.jpg';
import Huawei from '../../assets/huawi.jpg';
let CustomerCare = ()=>{
    const care = [
        
'Help Center',
'How to Buy',
'Corporate & Bulk Purchasing',
'Returns & Refunds',
'Daraz Shop',
'Contact Us',
'Purchase Protection',
'Daraz Pick up Points',
    ]
    const daraz = [
'About Us',
'Digital Payments',
'Daraz Donates',
'Daraz Blog',
'Terms & Conditions',
'Privacy Policy',
'NTN Number : 4012118-6',
'STRN Number : 1700401211818',
'Online Shopping App',
'Online Grocery Shopping',
'Daraz Exclusive',
'Daraz University',
'Sell on Daraz',
'Join Daraz Affiliate Program',
    ]
    return(
        <main>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                    <ul>
                <h4>Customer Care</h4>
            {
                care.map(items=> <li className="list-item cursor-pointer">{items}</li>)
            }
            </ul>
                    </div>
                    <div className="col-md-3">
                    <ul>
                <h4>Daraz</h4>
            {
                daraz.map(items=> <li className="list-item cursor-pointer">{items}</li>)
            }
            </ul>
                    </div>
                   <div className="col-md-3">
            <div className="d-flex align-items-center">
              <img src={Daraz} alt="Daraz" className="img-fluid me-3" />
              <div>
                <h4>Happy Shopping</h4>
                <h5 className='text-danger'>Download App</h5>
              </div>
            </div>
          </div>
                    <div className="col-md-3">
                        <div className="d-flex align-items-center">
                        <img src={AppStore} className='mr-4' alt="" />
                        <img src={GooglePlay} alt="" />
                        </div>
                     <br />
                    <img src={Huawei} alt="" />
                    </div>
                </div>
            </div>
           
        </main>
    )
}
export default CustomerCare;