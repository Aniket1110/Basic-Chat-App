import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path='/password-reset' element={<PrivateRoute> <PasswordReset /> </PrivateRoute>} />
          <Route path='/login' element={<PublicRoute> <Login /> </PublicRoute>} />
          <Route path='/register' element={<PublicRoute> <Register /> </PublicRoute>} />
          <Route path='/forgot-password' element={<PublicRoute> <ForgotPassword /> </PublicRoute>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
