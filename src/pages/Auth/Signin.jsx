import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>
        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your email" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your password" />
          </div>
          <Link to="/">
            <button className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">Sign In</button>
          </Link>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
