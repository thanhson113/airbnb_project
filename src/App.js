import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import RoomList from './pages/RoomList/RoomList';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import Login from './pages/Login/Login';
import UserTemplate from './templates/UserTemplate/UserTemplate'
import Register from './pages/Register/Register';
import RoomDetailTemplate from './templates/RoomDetailTemplate/RoomDetailTemplate'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
          <HomeTemplate path="/home" component={Home}/>
          <HomeTemplate path="/roomdetail" component={RoomDetail}/>
          <RoomDetailTemplate path="/roomlist" component={RoomList}/>
          <UserTemplate path="/login" component={Login}/>
          <UserTemplate path="/register" component={Register}/>
          <AdminTemplate path="/admin" component={Dashboard}/>
          <HomeTemplate path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
