import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from "./contexts/AuthContext";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
