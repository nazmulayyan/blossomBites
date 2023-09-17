import { useState, useEffect, useRef, useContext } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import userImg from '../../../assets/icon/user.jpeg'
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/Usecart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    return (
        <nav>
            <div className="bg-gray-800 fixed z-50 w-full bg-opacity-80 text-white h-20 flex items-center justify-between">
                <div className="text-xl font-bold">Your Logo</div>
                <div ref={menuRef}>
                    <ul
                        className={`list-none lg:flex items-center lg:static duration-500 lg-p-0 p-5 md:text-center -z-10 lg:space-y-0 space-y-3 md:space-x-3 w-2/4 md:w-full md:h-0 h-screen absolute md:bg-transparent bg-gray-800 ${isMenuOpen ? "top-20 right-0 " : "-right-80 top-20 "
                            }`}
                    >
                        <li><Link>HOME</Link></li>
                        <li><Link>CONTACT US</Link></li>
                        <li><Link to='/dashboard'>DASHBOARD</Link></li>
                        <li><Link to='/menu'>OUR MENU</Link></li>
                        <li><Link to='/order/salad'>OUR SHOP</Link></li>
                        <li><Link to='/dashboard/mycart'>
                            <div className="bg-white  rounded-sm text-gray-800 text-xl flex items-center px-2 py-1">
                                <BsCart2 />
                                <p className="text-sm font-bold border-gray-800">+{cart?.length || 0}</p>
                            </div>
                        </Link></li>

                        {
                            user ? <>
                                <button onClick={handleLogOut}>LOGOUT</button>
                            </> : <>
                                <li><Link to='/login'>LOGIN</Link></li>
                                <li><Link to='/singup'>SING UP</Link></li>
                            </>
                        }


                        {/* <li><Link to='/secret'>secret</Link></li> */}

                        {
                            user ? <>
                                <li><Link><img className="w-10 h-10 border border-white rounded-full" src={user?.photoURL} alt="" /></Link></li>
                            </> : <>
                                <li><Link><img className="w-10 h-10 border border-white rounded-full" src={userImg} alt="" /></Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black p-2 z-10 bg-white">
                        {isMenuOpen === true ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
