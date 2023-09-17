import { NavLink, Outlet } from "react-router-dom";
import { BsCart2, BsFillWalletFill, BsCalendar3, BsHouseDoorFill, BsList, BsFillBagFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaUsers, FaUtensils, FaBook } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/Usecart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();


  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Blossom Bites | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}


          <div className="flex justify-end">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">  Open drawer</label>
          </div>
          <div className="w-10/12 mx-auto py-16">
            <Outlet></Outlet>
          </div>


        </div>
        <div className="drawer-side bg-yellow-600">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 min-h-full">

            {/* Sidebar content here */}
            {
              isAdmin ? <>
                <li><NavLink className='font-semibold uppercase' to='/adminhome'> <BsHouseDoorFill className="text-xl" /> Admin Home</NavLink></li>

                <li><NavLink className='font-semibold uppercase' to='/dashboard/addItem'> <FaUtensils className="text-xl" /> Add items</NavLink></li>

                <li><NavLink className='font-semibold uppercase' to='/menu'><BsList className="text-xl" /> Manage Items</NavLink></li>

                <li><NavLink className='font-semibold uppercase' to='/dashboard/bookings'><FaBook className="text-xl" /> Manage Bookings</NavLink></li>

                <li><NavLink className='font-semibold uppercase' to='/dashboard/allusers'><FaUsers className="text-xl" /> all users</NavLink></li>

              </> :
                <>
                  <li><NavLink className='font-semibold uppercase' to='/dashboard/home'> <BsHouseDoorFill className="text-xl" /> User Home</NavLink></li>

                  <li><NavLink className='font-semibold uppercase' to='/reservation'> <BsCalendar3 className="text-xl" /> Reservation</NavLink></li>

                  <li><NavLink className='font-semibold uppercase' to='/history'> <BsFillWalletFill className="text-xl" /> Payment History</NavLink></li>

                  <li><NavLink className='font-semibold uppercase' to='/dashboard/mycart'><BsCart2 className="text-xl" /> My Cart <span className="bg-white text-gray-800 px-3 py-1 rounded-sm">Added: {cart?.length || 0}</span></NavLink></li>
                </>
            }


            <div className="border-2 border-gray-950 my-8"></div>

            <li><NavLink className='font-semibold uppercase' to='/'><BsHouseDoorFill className="text-xl" /> Home</NavLink></li>

            <li><NavLink className='font-semibold uppercase' to='/menu'><BsList className="text-xl" /> Menu</NavLink></li>

            <li><NavLink className='font-semibold uppercase' to='/order/salad'><BsFillBagFill className="text-xl" /> Shop</NavLink></li>

            <li><NavLink className='font-semibold uppercase' to='/contact'><HiMail className="text-xl" /> Contact</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
