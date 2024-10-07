import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import munchlyLogo from './img/munchly log.png';

/* 
header
    -logo
    navbar
        -home
        -about
        -cart
body
    -searchbar
    -card container
        card
            -img
            -name of res,star rating,delivery time
footer
    -copyright
    address
    links         
*/

const Header=()=>
{
    return(
       <div className="header">
        <div className="logo-Conainer">
            <img className="logo" src={munchlyLogo}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
       </div> 
    )
}
const Resturantcard=(props)=>{ // props is like argument
    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
        sla,
    }=resData?.info; // functional chaining
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId }/>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            
        </div>
    );
};
const reslist= [
    {
      "info": {
        "id": "774719",
        "name": "SGF - Spice Grill Flame",
        "cloudinaryImageId": "0c261cd7ecaf30c9752209ce8aed2a38",
        "locality": "Patel Nagar",
        "areaName": "West Patel Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Beverages"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "2440",
        "avgRatingString": "4.0",
        "totalRatingsString": "210",
        "promoted": true,
        "adTrackingId": "cid=19286614~p=0~adgrpid=19286614#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=774719~eid=3922dc00-7362-4d3d-a199-4c182035eefd~srvts=1728137282032~collid=45995",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-06 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "19286614"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=774719",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "253722",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/be4a684e-f48b-4788-92a1-2598da4c3e02_253722.jpg",
        "locality": "Rachna Cinema Complex",
        "areaName": "Rajendra Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "22K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-06 06:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=253722",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "26724",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG",
        "locality": "West Patel Nagar",
        "areaName": "West Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "31K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-05 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "3.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=26724",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "129211",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
        "locality": "Patel Rd",
        "areaName": "Shadipur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "21K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-06 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=129211",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "492325",
        "name": "Caterspoint",
        "cloudinaryImageId": "aq9ujdegkrwzbtlhfurg",
        "locality": "West Patel Nagar",
        "areaName": "West Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Salads",
          "Healthy food",
          "Snacks",
          "pastas"
        ],
        "avgRating": 4.3,
        "parentId": "11011",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.2K+",
        "promoted": true,
        "adTrackingId": "cid=19295775~p=1~adgrpid=19295775#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=492325~eid=08fae464-761c-43dc-817c-45d17e1405d1~srvts=1728137282032~collid=45995",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-05 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png",
              "description": "Delivery!"
            },
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Healthy.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x"
                  }
                }
              ]
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.7",
            "ratingCount": "18"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "19295775"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=492325",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "24194",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/4e7eac37-9a50-42a9-8806-de598abc401d_24194.jpg",
        "locality": "Karol Bagh",
        "areaName": "East Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-06 03:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=24194",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "20055",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/e1c8826c-b399-447b-8e77-f4d4b597140a_20055.jpg",
        "locality": "Karol Bagh",
        "areaName": "Patel Nagar, Connaught Place",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-12 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=20055",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
        "info": {
          "id": "681639",
          "name": "LeanCrust Pizza- ThinCrust Experts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/c3ba4d7e-82aa-453c-becd-6346a7d8ff7c_681639.jpg",
          "locality": "LSC 4",
          "areaName": "Karampura",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "11216",
          "avgRatingString": "4.4",
          "totalRatingsString": "103",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-06 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=681639",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "966334",
          "name": "THE FOODIES SPOT",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/7cd79297-108e-4378-89eb-749e29bf0c11_966334.JPG",
          "locality": "Karol Bagh",
          "areaName": "Karol Bagh",
          "costForTwo": "₹299 for two",
          "cuisines": [
            "Chinese",
            "Pastas",
            "Fast Food",
            "Burgers"
          ],
          "veg": true,
          "parentId": "558385",
          "avgRatingString": "NEW",
          "promoted": true,
          "adTrackingId": "cid=19377164~p=3~adgrpid=19377164#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=966334~eid=33a5d956-c186-4aa0-8ccf-77674c47d4c2~srvts=1728137282032~collid=45995",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.2,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-05 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "19377164"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=966334",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "622229",
          "name": "MOJO Pizza - 2X Toppings",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622229.JPG",
          "locality": "Delhi",
          "areaName": "Kirti Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "11329",
          "avgRatingString": "4.4",
          "totalRatingsString": "628",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-06 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=622229",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "750423",
          "name": "Daily Kitchen - Homely Meals",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750423.JPG",
          "locality": "LSC 4",
          "areaName": "Karampura",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
          ],
          "avgRating": 4.3,
          "parentId": "444382",
          "avgRatingString": "4.3",
          "totalRatingsString": "538",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-06 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "shortDescription": "options available",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": ""
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹119"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=750423",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "369320",
          "name": "Annie's Kerala Kitchen",
          "cloudinaryImageId": "tvqrxtt9zizhrs7yhcej",
          "locality": "Karol Bagh",
          "areaName": "East Patel Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kerala",
            "South Indian"
          ],
          "avgRating": 4.2,
          "parentId": "16672",
          "avgRatingString": "4.2",
          "totalRatingsString": "4.5K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-05 22:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹199"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=369320",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "875145",
          "name": "Dim Sum - Authentic Chinese",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/c8dc0cef-d75f-4f41-83a4-58854c571b6e_875145.jpg",
          "locality": "Satya Niketan",
          "areaName": "East Patel Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Pizzas",
            "Pastas",
            "Italian",
            "Continental",
            "Pan-Asian",
            "Asian",
            "Barbecue",
            "Grill",
            "Street Food",
            "Fast Food",
            "Salads",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "515034",
          "avgRatingString": "4.4",
          "totalRatingsString": "38",
          "promoted": true,
          "adTrackingId": "cid=19286661~p=5~adgrpid=19286661#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=875145~eid=2c0ddd8b-06ba-4160-8c4b-1b32c0f6420e~srvts=1728137282032~collid=45995",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-06 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "19286661"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=875145",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "54773",
          "name": "Sai Guru Dhaba",
          "cloudinaryImageId": "8850ccbeee8f5df658e8ba3dc83626c9",
          "locality": "Suraj Parkash Marg",
          "areaName": "West Patel Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Tandoor",
            "Thalis"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "15910",
          "avgRatingString": "4.4",
          "totalRatingsString": "19K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 0.2,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-05 23:15:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=54773",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      }] ;


const Body=()=>{
    return(<div className="body">
        <div className="search">search</div>
        <div className="resturant-container">
       {/* <Resturantcard resData={reslist[0]}/>  */}

       {/* using map to pass reslist data */}

       {reslist.map((restaurant)=>
    (<Resturantcard key={restaurant.info.id} resData={restaurant}/>))}
        
        
        
        
        </div>
    </div>)
}

const AppLayout=()=>
{
    return (
        <div className="app"> 
        <Header/>
        <Body/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);