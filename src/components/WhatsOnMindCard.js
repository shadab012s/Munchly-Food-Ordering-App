

import { mind_img } from "../utils/constants";

const WhatsOnMindCard = ({ mindData }) => {
  const { accessibility, imageId, action } = mindData;

  return (
    <div className="res-card w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] aspect-[100/120] overflow-clip rounded-lg shadow-md hover:shadow-lg transition-all">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={mind_img + imageId}
        alt={accessibility?.altText || "Delicious food image"}
      />
      {/* Display text for action, if available */}
      {/* <h3 className="font-bold py-4 text-lg">{action?.text || "Food Item"}</h3> */}
    </div>
  );
};

export default WhatsOnMindCard;
