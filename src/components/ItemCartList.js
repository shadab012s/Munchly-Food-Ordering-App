import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  removeSpecificItem,
} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemCartList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity({ id: itemId }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeSpecificItem({ id: itemId }));
  };

  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-4 border border-gray-200 rounded-lg shadow-md bg-white flex flex-row-reverse"
        >
          {/* Item Image on the Right */}
          <div className="w-1/4">
            {item?.card?.info?.imageId && (
              <img
                className="rounded-lg w-full h-24 object-cover"
                src={`${CDN_URL}${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
            )}
          </div>

          {/* Item Details and Buttons */}
          <div className="w-3/4 pl-4">
            <h3 className="text-sm font-medium">{item.card.info.name}</h3>
            <p className="text-xs text-gray-500">{item.card.info.description}</p>
            <p className="text-sm font-semibold text-gray-800">
              Price: ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
            <div/>

            {/* Action Buttons */}
            <div className="flex items-center justify-start space-x-2 mt-2">
              {/* Decrease Button */}
              <button
                className="px-3 py-1 text-xs text-white bg-red-300 hover:bg-red-500 rounded-md"
                onClick={() => handleDecreaseQuantity(item.card.info.id)}
              >
                -
              </button>
              {/* Quantity Display */}
              <span className="px-4 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-md">
                {item.quantity}
              </span>
              {/* Add Button */}
              <button
                className="px-3 py-1 text-xs text-white bg-green-500 hover:bg-green-600 rounded-md"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              {/* Remove Button */}
            
            <button
              className="px-3 py-1 text-xs font-medium text-white bg-gray-400 hover:bg-gray-500 rounded-md"
              onClick={() => handleRemoveItem(item.card.info.id)}
            >
              Remove
            </button>
            </div>

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCartList;
