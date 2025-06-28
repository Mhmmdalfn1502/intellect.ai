import { Link } from "react-router-dom";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="relative flex items-center justify-center w-screen min-h-screen bg-white inset-0 h-full object-cover z-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src="BG2.png" alt="" />
      <img className="absolute w-[80%] -left-40 -bottom-50" src="Saly.png" alt="" />
      <div className="absolute right-30 w-[580px] p-12 bg-white/30 backdrop-blur-xl rounded-2xl">
      <div class="absolute z-0 blur-xl bottom-10 right-20 size-36 rounded-full bg-radial from-purple-500/40 from-40% to-fuchsia-700/10"></div>
        <div className="flex flex-col">
          <span className="text-[16px] font-semibold text-[#4A3AFF]">
            Hello, <span className="text-[#3D3155]">Welcome</span>
          </span>
          <span className="text-[46px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A3AFF] to-white">Create Account</span>
          <span className="text-[#8B80A3] text-[16px] font-medium">
            Already have an account?<span> </span>
            <a className="text-[#4A3AFF] font-semibold" href="/signin">
              Sign in
            </a>
          </span>
        </div>

        <form className="mt-8">
          <div>
            <label className="block text-[14px] text-[#8B80A3] font-medium">Username</label>
            <input type="email" className="w-full px-4 py-2 mt-2 border-1 border-[#8B80A3] rounded-3xl focus:ring focus:ring-blue-200 text-[#8B80A3]" placeholder="Enter your username" />
          </div>
          <div className="mt-4">
            <label className="block text-[14px] text-[#8B80A3] font-medium">Password</label>
            <input type="password" className="w-full px-4 py-2 mt-2 border-1 border-[#8B80A3] rounded-3xl focus:ring focus:ring-blue-200 text-[#8B80A3]" placeholder="Enter your password" />
          </div>
          <div className="flex flex-row justify-between mt-4">
            <span className="text-[#8B80A3] text-[14px]">Remember me</span>
            <span className="text-[#8B80A3] text-[14px]">Forgot Password?</span>
          </div>
          <Link to="/signin">
            <button className="w-full px-4 py-2 mt-6 font-medium text-white bg-[#4A3AFF] rounded-3xl hover:bg-[#4A3AFF]/90">Continue</button>
          </Link>
        </form>
        <div className="flex flex-row gap-2 justify-between items-center mt-6">
          <hr className="h-[2px] w-[220px] bg-gray-500/30" />
          <span className="text-[14px] font-medium text-[#8B80A3]">or</span>
          <hr className="h-[2px] w-[220px] bg-gray-500/30" />
        </div>
        <div className="logo flex flex-row justify-between px-24 mt-6">
          <FcGoogle size={30} className="text-[#4A3AFF]" />
          <FaApple size={30} className="text-[#3D3155]" />
          <FaFacebook size={30} className="text-[#4A3AFF]" />
        </div>
      </div>
      <div class="absolute blur-xl right-20 top-20 size-18 rounded-full bg-radial from-pink-400/70 from-40% to-fuchsia-700/10"></div>
    </div>
  );
};

export default Signup;
