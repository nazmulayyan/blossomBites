import { useContext, useState } from 'react';
import Button from '../Button/Button';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/Usecart';

const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleAddToCart = () => {
        console.log(item);
        if (user && user.email) {
            const cardItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cardItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the cart
                        Toast.fire({
                            icon: 'success',
                            title: 'Food added on the cart'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please log in to order food',
                text: "if aren't login you unable to order food",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#FFB300',
                cancelButtonColor: '#2D3748',
                confirmButtonText: 'LOGIN NOW'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    // State to keep track of recipe text expansion
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expansion state
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className="text-center relative bg-gray-100 rounded-sm pb-8 shadow-sm md:mb-0 mb-8">
                <img className="rounded-tl-sm rounded-tr-sm w-full" src={image} alt="" />

                <p className="absolute top-4 right-4 bg-gray-800 px-4 py-2 text-white rounded-sm font-semibold">${price}</p>

                <div className="px-4">
                    <h4 className="text-xl font-semibold pt-4">{name}</h4>

                    {/* Conditionally render recipe text */}
                    {recipe.length > 43 ? (
                        <p>
                            {isExpanded ? recipe : `${recipe.slice(0, 43)}...`}
                            <span
                                className="text-yellow-500 cursor-pointer"
                                onClick={toggleExpansion}
                            >
                                {isExpanded ? ' Less' : ' More'}
                            </span>
                        </p>
                    ) : (
                        <p>{recipe}</p>
                    )}

                    <Button onClick={handleAddToCart} buttonText="ADD TO CART"></Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
