import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import swal from "sweetalert";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const [success, setSuccess] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset error
    setLogInError("");
    setSuccess("");

    //

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Logged In Successfully.");
        swal("Logged In Successfully.", {
          button: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
        setLogInError("Failed to Login!");
        swal("Logged in failed!", {
          button: "Ok",
        });
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="relative h-[120vh] lg:[100vh]">
        {/*amar Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="./beauti.mp4"
        />
        {/* black akta background diyehi */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* trial div */}
        <div className="absolute inset-0 ">
          <div className="px-4 lg:px-0">
            <h1 className="text-center text-white text-3xl md:text-4xl  my-10">
              Please login
            </h1>

            <form onSubmit={handleLogin} className="md:w-3/2 lg:w-1/2 mx-auto ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-white link link-hover"
                >
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn bg-[#99627A] text-white border-0 hover:bg-[#C88EA7]">
                  Login
                </button>
              </div>
            </form>

            {logInError && (
              <p className=" my-2 text-sm text-center font-semibold text-red-700">
                {logInError}
              </p>
            )}
            {success && (
              <p className="my-2 text-sm font-semibold text-center text-green-600 t-4">
                {success}
              </p>
            )}

            <p className="my-4 text-white text-center">
              {`Don't have any account?`} Please{" "}
              <Link
                to="/register"
                className="font-extrabold b border-b-2 text-[#E7CBCB]"
              >
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* trial end */}
    </div>
  );
};

export default Login;
