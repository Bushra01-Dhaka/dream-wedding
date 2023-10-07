import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);


  const handleSignOut = () => 
  {
        logOut()
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error);
        })
  }

  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#C88EA7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow bg-[#C88EA7] text-white rounded-box w-52 text-md font-semibold"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Kind Words
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="px-4">
            <h1 className="text-sm md:text-xl font-bold">Dream Wedding</h1>
            <p className="md:text-center font-bold text-[12px] text-[#99627A]">Est. 2020</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-md font-semibold">
          <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : ""
                  }
                >
                  Kind Words
                </NavLink>
              </li>
              <li>
               
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : " text-red"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <button className="w-[100px] h-[40px] bg-[#99627A] text-white text-bold rounded hover:bg-[#C88EA7]">Sign Out</button>
            : 
            <Link onClick={handleSignOut} to='/login'><button className="w-[100px] h-[40px] bg-[#99627A] text-white text-bold rounded hover:bg-[#C88EA7]">Login</button></Link>
          }
           


        </div>
      </div>
    </div>
  );
};

export default Navbar;
