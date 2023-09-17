import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/Usecart";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FFB300',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full bg-white rounded-sm p-5">
            <Helmet>
                <title>Blossom Bites | My Cart</title>
            </Helmet>

            <div className="uppercase flex justify-between items-center mb-4">
                <h4 className="font-semibold">Total Items: {cart.length}</h4>
                <h4 className="font-semibold">Total Price: ${total}</h4>
                <button className="px-6 py-2 font-semibold uppercase bg-yellow-600 rounded-sm text-white ">pay</button>
            </div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600 rounded-sm text-white uppercase">
                        <tr>
                            <th>#</th>
                            <th>item image</th>
                            <th>item name</th>
                            <th className="text-end">price</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-sm w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td className="text-end">
                                    <button onClick={() => handleDelete(item)} className="rounded-sm text-white text-xl p-2 bg-red-600"><HiOutlineTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;