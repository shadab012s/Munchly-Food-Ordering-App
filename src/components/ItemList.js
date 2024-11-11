import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* Item Details */}
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span className="">
               - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
              <p className="text-xs text-gray-500 py-2">{item.card.info.description}</p>
            </div>
          </div>

          {/* Item Image and Add Button */}
          <div className="p-4 w-3/12 relative h-32">
          {item?.card?.info?.imageId && (
           
              <img
                className="rounded-lg w-full h-full object-cover"
                src={`${CDN_URL}${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
              
           
          )}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <button className="p-2 rounded-lg bg-white text-green-400 shadow-lg ">
                  Add +
                </button>
              </div>
              </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
