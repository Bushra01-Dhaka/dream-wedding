import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import swal from "sweetalert";
import './Register.css'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  console.log("register page location",location);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const accepted = e.target.terms.checked;
    const password = e.target.password.value;
    console.log(name, email, password);

    
    // register validate

    if (password.length < 6) {
      setRegisterError("Password should  be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("You should have at least one Uppercase character.");
      return;
    } else if (!/[@#$%^&*]/.test(password)) {
      setRegisterError("You should have at least one special character.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("You should have at least one number.");
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions.");
      return;
    }

    //reset error
    setRegisterError("");
    setSuccess("");

    //

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully Registered.");
        //navigate korbe
        navigate(location && '/');

        // toast show korlam
        swal("Successfully Registered.", {
            button: "Ok",

          });
      })
      .catch((error) => {
        console.error(error);
         setRegisterError("Failed to Register!")
        //error toast 
        swal("Failed to Register!", {
            button: "Ok",

          });
      });

  };

  const handleGoogleSignIN = () =>
  {
    googleSignIn()
    .then(result => {
        console.log(result.user);
        //navigate korlam
        navigate(location && '/');

        setSuccess("Logged In Successfully.");
        swal("Logged In Successfully.", {
          button: "Ok",
        });

    })
    .catch(error => {
        console.error(error);
        setRegisterError("Failed to Login!");
    swal("Logged in failed!", {
      button: "Ok",
    });
    })
  };


  return (
    <div className="bg-[#FFF3DA]">
      <Navbar></Navbar>
      <div className="px-4 lg:px-0">
        <h1 className="text-center text-3xl  my-10">Please Register</h1>
        <form onSubmit={handleRegister} className="md:w-3/2 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="user name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
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
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <input className="my-6" type="checkbox" name="terms" id="terms" />
          <label className="ml-2 py-4 font-bold" htmlFor="terms">
            Accept our{" "}
            <a href="" className="text-sm">
              Terms and Condition
            </a>
          </label>

          <div className="form-control mt-6">
            <button className="btn bg-[#99627A] text-white hover:bg-[#C88EA7]">
              Register
            </button>
          </div>

          {/* google register */}
          {/* <div className="mt-8 mb-4"> 
                <hr className="border-b-1 border-[#643843]"/>
                <h3 className="text-xl text-black text-center my-2">Or</h3>
                <div className="mx-auto">
                <FcGoogle className="relative top-9 text-xl left-[280px] md:left-[225px]"></FcGoogle>
                <button onClick={handleGoogleSignIN} className="btn w-full mx-auto border-2 border-[#643843] text-[#643843]  rounded ">Continue With Google</button>
                </div>
            </div> */}
        </form>

         <div className="md:w-3/2 lg:w-1/2 mx-auto">
         <div className="mt-8 mb-4"> 
                <hr className="border-b-1 border-[#643843]"/>
                <h3 className="text-xl text-black text-center my-2">Or</h3>
                <div className="mx-auto">
                <FcGoogle className="relative top-9 text-xl left-[280px] md:left-[225px]"></FcGoogle>
                <button onClick={handleGoogleSignIN} className="btn w-full mx-auto border-2 border-[#643843] text-[#643843]  rounded ">Continue With Google</button>
                </div>
            </div>
         </div>

        {registerError && (
          <p className=" my-2 text-sm text-center font-semibold text-red-700">{registerError}</p>
        )}
        {success && <p className="my-2 text-sm font-semibold text-center text-green-600 t-4">{success}</p>}

        <p className="my-4  text-center font-bold mb-8">
          {`Already have an account?`} Please{" "}
          <Link
            to="/login"
            className="font-extrabold b border-b-2 border-[#C88EA7] text-[#C88EA7]"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
