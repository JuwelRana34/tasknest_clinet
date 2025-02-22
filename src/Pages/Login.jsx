import { useContext } from "react";
import UserContext from "../Context/AuthContext";
import { Button, InputIcon, Input, Label, Divider, toast } from "keep-react";
import { Link, useNavigate } from "react-router";
import ThemeContext from "../Context/ThemeProvider";

function Login() {
  const { user, GoogleLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(() => {
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  if (user) return navigate("/");

  return (
    <div className="min-h-screen">
      <div
        className={`max-w-full h-screen container mx-auto  space-y-2 rounded-lg border bg-gradient-to-bl from-blue-400 to-blue-50  dark:border-none p-8 shadow-md  dark:bg-metal-800 dark:from-metal-800 dark:to-metal-900`}
      >
        <div className=" md:flex gap-2 ">
          <div>
            <img
              className={`w-full rounded object-cover ${
                theme === "dark" ? "dark:bg-gray-700" : "bg-white"
              }`}
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid"
              alt="User"
            />
          </div>
          <div className="w-full text-center ">
            <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>

            <p className="w-[70%] mx-auto">
              We're pleased to have you return to our task management platform.
              To continue managing your tasks efficiently and effectively,
              please log in using your credentials.
            </p>
            <Button
              onClick={handleGoogleLogin}
              className={` mt-5 hover:bg-blue-600 bg-blue-500   dark:bg-metal-700 dark:hover:bg-metal-600 space-x-2 mb-5 w-[80%] mx-auto  text-white `}
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
    </div>
  );
}

export default Login;
