import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading ] = useAdmin();
    const location = useLocation();
    
    if(loading || isAdminLoading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-ring w-[50px] "></span></div>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
    
};

export default AdminRoutes;