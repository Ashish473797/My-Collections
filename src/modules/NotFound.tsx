import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";


export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="h-[85vh] flex flex-col justify-center items-center text-center bg-gray-100">
      <div className="text-8xl mb-8">😕</div>
      <h1 className="text-xl md:text-4xl font-bold text-gray-800">
        404 (Page Not Found!)
      </h1>
      <p className="mt-4 text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button className="py-3 px-5 rounded-full mt-8" onClick={() => {
        navigate('/');
      }}>Back to Home</Button>
    </div>
  );
}
