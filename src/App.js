import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from "./contexts/AuthContext";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";

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
            <Route path='/home/password-reset' element={<PasswordReset />}/>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
