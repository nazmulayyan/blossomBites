import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                    const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                    fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)

                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, { replace: true });
                            })

            })
    }
    return (
        <div>
            <div className="border-t-2 w-full flex items-center border-gray-800  text-yellow-600 capitalize font-semibold">sing in with google
                <button onClick={handleGoogleSingIn} className="p-2 bg-gray-800 rounded-sm my-5 ml-2"><BsGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;