import Method from '../../assets/jss.jpg';
import Dss from '../../assets/dss.jpg';
const PaymentMethods = ()=>{
    return(
        <main className="shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-4">
                    <h3 className='ml-4'>Payment Methods</h3>
                    <img src={Method} alt="" />
                    </div>
                    <div className="col-md-4 my-4">
                        <h3>Verified by</h3>
                        <img src={Dss} alt="" />
                    </div>
                </div>
                
            </div>
        </main>
    )
}
export default PaymentMethods;