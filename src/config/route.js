import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/Authentication/signin/Signin";
import Signup from "../pages/Authentication/signup/Signup";
const Routing = () => {
  // const Auth = localStorage?.getItem('token')

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes  */}
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;