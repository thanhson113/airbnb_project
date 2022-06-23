/** @format */

import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// import './assets/css/main-color.css'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import RoomList from './pages/RoomList/RoomList';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RoomDetailTemplate from './templates/RoomDetailTemplate/RoomDetailTemplate'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Booking from './pages/Booking/Booking';
import Profile from './pages/Profile/Profile';

import User from './pages/Admin/User/User';
import AddUser from './pages/Admin/User/AddUser';
import EditUser from './pages/Admin/User/EditUser';

import Location from './pages/Admin/Location/Location';
import AddLocation from './pages/Admin/Location/AddLocation';
import Editlocation from './pages/Admin/Location/EditLocation';
import AvatarLocation from './pages/Admin/Location/AvatarLocation';

import Room from './pages/Admin/Room/Room';
import AddRoom from './pages/Admin/Room/AddRoom';
import EditRoom from './pages/Admin/Room/EditRoom';
import AvatarRoom from './pages/Admin/Room/AvatarRoom';

import Feedback from './pages/Admin/Feedback/Feedback';
import AddFeedback from './pages/Admin/Feedback/AddFeedback';
import EditFeedback from './pages/Admin/Feedback/EditFeedback';

import LocationTicket from './pages/Admin/Ticket/VeTheoPhong/LocationTicket';
import RoomTicket from './pages/Admin/Ticket/VeTheoPhong/RoomTicket';
import Ticket from './pages/Admin/Ticket/VeTheoPhong/Ticket';
import RoomAddTicket from './pages/Admin/Ticket/VeTheoPhong/RoomAddTicket';
import RoomEditTicket from './pages/Admin/Ticket/VeTheoPhong/RoomEditTicket';

import UserTicket from './pages/Admin/Ticket/VeTheoNguoiDung/UserTicket';
import UserTicketChild from './pages/Admin/Ticket/VeTheoNguoiDung/UserTicketChild';
import UserEditTicket from './pages/Admin/Ticket/VeTheoNguoiDung/UserEditTicket';

import "antd/dist/antd.css";
import "./App.css";
import { BackTop } from 'antd';
import CartTemplate from "./templates/CartTemplate/CartTemplate";


const type = localStorage.getItem('type')

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* <HomeTemplate path="/roomdetail" component={RoomDetail}/> */}
        <HomeTemplate path="/roomdetail/:id" component={RoomDetail} />
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/booking" component={Booking} />
        <HomeTemplate path="/profile" component={Profile} />
        <RoomDetailTemplate path="/roomlist/:id" component={RoomList} />
        <RoomDetailTemplate path="/roomlist" component={RoomList} />
        <Route path="/login" component={Login} />
        <CartTemplate path="/cart/login" component={Login} />
        <Route path="/register" component={Register} />

        <AdminTemplate path="/admin/user/add" component={AddUser} />
        <AdminTemplate path="/admin/user/edit/:id" component={EditUser} />
        <AdminTemplate path="/admin/user" component={User} />

        <AdminTemplate path="/admin/location/add" component={AddLocation} />
        <AdminTemplate path="/admin/location/edit/:id" component={Editlocation} />
        <AdminTemplate path="/admin/location/avatar/:id" component={AvatarLocation} />
        <AdminTemplate path="/admin/location" component={Location} />

        <AdminTemplate path="/admin/room/add/:id" component={AddRoom} />
        <AdminTemplate path="/admin/room/edit/:id" component={EditRoom} />
        <AdminTemplate path="/admin/room/avatar/:id" component={AvatarRoom} />
        <AdminTemplate path="/admin/room/:id" component={Room} />

        <AdminTemplate path="/admin/feedback/add/:id" component={AddFeedback} />
        <AdminTemplate path="/admin/feedback/edit/:id" component={EditFeedback} />
        <AdminTemplate path="/admin/feedback/:id" component={Feedback} />

        <AdminTemplate path="/admin/ticket/location" component={LocationTicket} />
        <AdminTemplate path="/admin/ticket/room/:id" component={RoomTicket} />
        <AdminTemplate path="/admin/ticket/roomadd/:id" component={RoomAddTicket} />
        <AdminTemplate path="/admin/ticket/roomedit/:id" component={RoomEditTicket} />

        <AdminTemplate path="/admin/ticket/useredit/:id" component={UserEditTicket} />
        <AdminTemplate path="/admin/ticket/user/:id" component={UserTicketChild} />
        <AdminTemplate path="/admin/ticket/user" component={UserTicket} />
        <AdminTemplate path="/admin/ticket/:id" component={Ticket} />

        <AdminTemplate path="/admin" component={Dashboard} />


        <HomeTemplate path="/" component={Home} />
      </Switch>
      <BackTop>
        <div className='btnUp'>UP</div>
      </BackTop>
    </Router>
  );
}
export default App;
