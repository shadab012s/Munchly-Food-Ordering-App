const ShimmerCard = () => {
    return (
      <div className="p-4 m-2 border border-gray-200 rounded-lg shadow-md">
        <div className="w-full h-32 bg-gray-300 rounded-md animate-pulse mb-4"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    );
  };
  
  export default ShimmerCard;
  