import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const AllUsers = () => {

    const [axiosSecure] = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleMakeAdmin = user => {
        fetch(`https://blossom-bites-server-9yepjj7wt-nazmulayyan.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`
                    })
                }
            })
    }

    const handleDelete = user => {

    }

    return (
        <div className="w-full bg-white rounded-sm p-5">
            <Helmet>
                <title>Blossom Bites | All Users</title>
            </Helmet>

            <h4 className="text-xl font-semibold">Total Users:  {users.length}</h4>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600 rounded-sm text-white uppercase">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th >Role</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>

                                <td >{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="rounded-sm text-white text-xl p-2 bg-yellow-600"><FaUsers /></button>}</td>

                                <td className="text-end">
                                    <button onClick={() => handleDelete(user)} className="rounded-sm text-white text-xl p-2 bg-red-600"><HiOutlineTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;