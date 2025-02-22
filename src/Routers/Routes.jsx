import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Not_found from "../Pages/Not_found";
import PrivetRoute from "./PrivetRoute";

const AppRoute = () => {
  return(
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={ <PrivetRoute><Home /></PrivetRoute>  } />
      <Route path="login" element={ <Login />    } />
    </Route>
    <Route path="*" element={<Not_found />} />
  </Routes>
  )
}

export default AppRoute;
