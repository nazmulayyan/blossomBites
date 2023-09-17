import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {

    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="">
            <div className="grid grid-cols-2 ">

                <div className="text-center text-white py-24" style={{ background: '#1F2937' }}>

                    <h3 className="text-3xl pb-6">CONTACT US</h3>

                    <div className="text-lg">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>

                </div>

                <div className="py-24 text-center text-white" style={{ background: '#111827' }}>

                    <h3 className="text-3xl pb-6">Follow Us</h3>
                    <p className="text-lg pb-6">join us on social media</p>

                    {/* social media icons */}
                    <div className="flex justify-center space-x-2">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>

                </div>

            </div>
            <div className="bg-black text-white text-lg text-center py-3">Copyright © CulinaryCloud. All rights reserved. {currentYear} </div>
        </div>
    );
};

export default Footer;