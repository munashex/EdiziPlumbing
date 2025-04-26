import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-red-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  };
  
  export default NotFound;
  