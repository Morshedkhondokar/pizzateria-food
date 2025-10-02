import auth from '../../firebase/fire.init';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
   



    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const authInfo = {
       createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;