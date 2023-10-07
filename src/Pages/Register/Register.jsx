import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e =>
    {
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const accepted = e.target.terms.checked;
         const password = e.target.password.value;
         console.log(name,email,password);


        //  

        if(password.length < 6 )
        {
            setRegisterError("Password should  be at least 6 characters or longer");
            return;
        }
        else if(!/[A-Z]/.test(password))
        {
            setRegisterError("You should have at least one Uppercase character.");
            return;
        }
        else if(!/[@#$%^&*]/.test(password))
        {
            setRegisterError("You should have at least one special character.");
            return;
        }
        else if(!/[0-9]/.test(password))
        {
            setRegisterError("You should have at least one number.");
            return;
        }
        else if(!accepted)
        {
            setRegisterError("Please accept our terms and conditions.");
            return;
        }
       

        //reset error
        setRegisterError('');
        setSuccess('');


        // 

    }

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
            Accept our <a href="" className="text-sm">Terms and Condition</a>
          </label>

          <div className="form-control mt-6">
            <button className="btn bg-[#99627A] text-white hover:bg-[#C88EA7]">
              Register
            </button>
          </div>
        </form>

        {/* trial */}
           {
               success && 
           }

        {/*  */}

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
