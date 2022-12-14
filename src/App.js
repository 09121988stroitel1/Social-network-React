import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/common/Login/login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {

  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes> 

          <Route path='/dialogs' 
          element={<DialogsContainer />} />

<Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>

          <Route path='/users' element={<UsersContainer/>} />

          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </div>

    </div>

  );
  

}


export default App;
