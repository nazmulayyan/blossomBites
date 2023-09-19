import { useQuery } from '@tanstack/react-query'
import UseAxiosSecure from './UseAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {

    const { user, loading } = useAuth();
    console.log(user);

    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = UseAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`https://blossom-bites-server-9yepjj7wt-nazmulayyan.vercel.app/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // },
        
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
    })
    return [cart, refetch]

}
export default useCart;