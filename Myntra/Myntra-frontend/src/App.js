
import 'bootstrap/dist/css/bootstrap.min.css';
import Men from "./Components/Men";
import Women from "./Components/Women";
// import Kids from "./Components/Kids";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Bag } from 'react-bootstrap-icons';
import Wishlist from './Components/Wishlist';
import Studio from './Components/Studio';
// import HomeLiving from './Components/HomeLiving';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,toast} from 'react-toastify';
import Products from './Components/Products';
import EthnicWear from './Components/Categories/EthnicWear';
import CasualWear from './Components/Categories/CasualWear';
import WomenActiveWear from './Components/Categories/WomenActiveWear';
import MenActiveWear from './Components/Categories/MenActiveWear';
import WesternWear from './Components/Categories/WesternWear';
import Jewellery from './Components/Categories/Jewellery';
import HomeDecor from './Components/Categories/HomeDecor';
import Bags from './Components/Categories/Bags';
import BeautyMake from './Components/Categories/BeautyMake';
import Footwear from './Components/Categories/Footwear';
import Watches from './Components/Categories/Watches';
import Sportswear from './Components/Categories/Sportswear';
import Grooming from './Components/Categories/Grooming';
import LoungeWear from './Components/Categories/LoungeWear';
import Kidswear from './Components/Categories/Kidswear';
import SearchProducts from './Components/SearchProducts';
import ContextProvider from './Components/Categories/ContextProvider';
import Bag from './Components/Bag';
import { Footer, Header } from 'antd/es/layout/layout';
import Coupon from './Components/Coupon';
import Address from './Components/Address';
import Payment from './Components/Payment';
import Orders from './Components/Orders';
import ConfirmOrder from './Components/ConfirmOrder';
import CancelOrders from './Components/CancelOrders';
import ReturnOrder from './Components/ReturnOrder';
import CheckOut from './Components/CheckOut';
import OrderDetails from './Components/OrderDetails';


function App() {
  return (
    <div className="App">
      
    {/* <Header/> */}
    
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          {/* <Route path='/kids' element={<Kids />} /> */}
          {/* <Route path='/homeliving' element={<HomeLiving />} /> */}
          <Route path='/studio' element={<Studio />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/ethnic' element={<EthnicWear/>}/>
          <Route path='/casual' element={<CasualWear/>}/>
          <Route path='/womenActive' element={<WomenActiveWear/>}/>
          <Route path='/menActive' element={<MenActiveWear/>}/>
          <Route path='/western' element={<WesternWear/>}/>
          <Route path='/kidswear' element={<Kidswear/>}/>
          <Route path='/jewellery' element={<Jewellery/>}/>
          <Route path='/homedecor' element={<HomeDecor/>}/>
          <Route path='/bags' element={<Bags/>}/>
          <Route path='/beautymake' element={<BeautyMake/>}/>
          <Route path='/foot' element={<Footwear/>}/>
          <Route path='/watches' element={<Watches/>}/>
          <Route path='/sports' element={<Sportswear/>}/>
          <Route path='/lounge' element={<LoungeWear/>}/>
          <Route path='/grooming' element={<Grooming/>}/>
          <Route path='/search' element={<SearchProducts/>}/>
          <Route path="/coupon" element={<Coupon/>}/>
          {/* <Route path="/address" element={<Address/>}/> */}
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/cancel' element={<CancelOrders/>}/>
          <Route path='/return' element={<ReturnOrder/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/confirm' element={<ConfirmOrder/>}/>
      <Route path='/edit' element={<EditProfile/>}/>
      {/* <Route path='/payment' element={<Payment/>}/> */}
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/orderDetails' element={<OrderDetails/>}/>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
      
      <ToastContainer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
