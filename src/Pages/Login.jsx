import { useContext } from "react";
import UserContext from "../Context/AuthContext";
import { Button, InputIcon, Input, Label, Divider, toast } from "keep-react";

import { Link, useNavigate } from "react-router";

function Login() {
  const {user, GoogleLogin} = useContext(UserContext);
  const navigate = useNavigate();


  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(() => {
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  if(user) return navigate("/");

  return (
    <div>
      <div className="max-w-md mx-auto my-10 space-y-2 rounded-lg border  dark:border-none p-8 shadow-md  dark:bg-metal-800 ">
       
        
        <div className="text-center">
          <Button
            onClick={handleGoogleLogin}
            className=" hover:bg-slate-50 dark:hover:bg-metal-700 space-x-2 mb-5 w-[80%] mx-auto border text-gray-800 "
          >
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/720/720255.png"
              alt=""
            />
            <h1 className="dark:text-metal-300">Login with Google </h1>
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
