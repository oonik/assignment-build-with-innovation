import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleLogin = data => {
        loginUser(data.name, data.password);
        navigate('/')
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full shadow-2xl  bg-base-100 border-2 border-amber-400">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <h4 className='text-2xl font-bold text-center mb-3 text-amber-400'>Login Now</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="name" placeholder="name"
                                {...register("name", { required: "Email is required" })}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password"
                                {...register("password", { required: "Password is required"})}
                                className="input input-bordered" />
                            <label className="label">
                                <a href="htmlFor" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-2'>Don't have an account? <Link to="/signup" className='text-amber-500'>Signup</Link></p>
                    {/* <p className='text-red-500'>{loginError}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Login;