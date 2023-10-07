import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center text-3xl  my-10">Please login</h1>
        <form className="md:w-3/2 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
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
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>


          <div className="form-control mt-6">
            <button className="btn bg-[#99627A] text-white hover:bg-[#C88EA7]">Login</button>
          </div>
        </form>
        <p className="my-4 text-center">{`Don't have any account?`} Please <Link to='/register' className="font-bold text-[#643843]">Register</Link> </p>
        
      </div>

     

     
    </div>
  );
};

export default Login;
