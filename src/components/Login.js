import { useState } from "react";
import {useAuth} from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from "./Alert";

export function Login() {
    const [user, setUser] = useState({
        email:'',
        password:'',
    });


    const { login, loginwithGoogle } = useAuth();
    const navigate = useNavigate();
    const [error,setError] = useState();

    const handleChange = ({target: {name,value}}) =>{
        setUser({...user,[name]:value});
    };

    const handleSubmit = async(e) =>{
        setError('')
        e.preventDefault()
        try {
            await login(user.email,user.password)
            navigate('/');
        } catch (error) {
           setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await loginwithGoogle()
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input 
                type="email" 
                name="email" 
                placeholder="abc@gmail.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="Contraseña" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                placeholder="*******"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange} 
                />
            </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar sesión</button>
            </form>

            <p className="my-4 text-sm flex justify-between px-3">No tiene una cuenta, <Link to='/register' className="text-blue-700 hover:text-blue-900">Regístrese</Link></p>
            
            <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">Iniciar sesión con Google</button>
        </div>
    );
}

 