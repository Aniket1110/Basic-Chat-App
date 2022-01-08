import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/home/password-reset' element={<PrivateRoute><PasswordReset /></PrivateRoute>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
