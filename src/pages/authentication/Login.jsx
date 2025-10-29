import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userCredentials = { email, password }
        console.log(userCredentials)
    }
    return (
        <div>
            <div className="md:flex gap-0 h-screen justify-center items-center bg-[#ffffffbf] w-1/2 mx-auto">
                <div className="border-l border-t border-b border-white p-5.5 w-full">
                    <h1 className="text-xl text-center font-bold">Login</h1>
                    <img src="/src/assets/Logo.png" alt="Logo" className="mx-auto" />
                </div>
                <div className="p-5 border-r border-t border-b border-white w-full">
                    <form onSubmit={handleLogin} className="w-full">
                        <input type="email" name="email" className="block w-full border border-black p-2 text-md mb-5" placeholder="Enter your email"></input>
                        <input type="password" name="password" className="block w-full border border-black p-2 text-md mb-5" placeholder="Enter your password"></input>
                        <div className="md:flex gap-10">
                            <input type="submit" name="login" value="Login" className="btn w-1/2 btn-accent p-2 text-md mb-5" placeholder="Enter your password"></input>
                            <Link to={'/register'} className="w-1/2"><input type="submit" name="register" value="Register" className="btn w-full btn-active p-2 text-md mb-5" placeholder="Enter your password"></input></Link>

                        </div>
                         <div className="flex justify-between items-center">
                            <button className="btn">Google login</button>
                            <span>X</span>
                            <button className="btn">Github login</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;