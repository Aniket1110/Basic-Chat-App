import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from "./contexts/AuthContext";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import PasswordReset from "./components/PasswordReset";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home'  element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/home/profile' element={<Profile />} />
            <Route path='/home/password-reset' element={<PasswordReset />}/>
            <Route path='/home/profile/update-profile' element={<UpdateProfile />}/>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
