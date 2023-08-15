import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'
    const showOnLogin = ({childern}) => {
        const isLoggedIn= useSelector;

        if(isLoggedIn){
            return childern;
        }
        return null;
    };
 export const showOnOut = ({childern}) => {
        const isLoggedIn= useSelector;

        if(!isLoggedIn){
            return childern;
        }
        return null;
    };

export default showOnLogin;
