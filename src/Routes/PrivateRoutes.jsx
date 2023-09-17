import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    
    if(loading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-ring w-[50px] "></span></div>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;