export default function NotFound() {
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center text-center bg-gray-100">
      <div className="text-8xl mb-8">😕</div>
      <h1 className="text-xl md:text-4xl font-bold text-gray-800">
        404 (Page Not Found!)
      </h1>
      <p className="mt-4 text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
}
