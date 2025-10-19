/**
 * 
 //! we using in this code hard-coded data 
 * Header
 * - Logo
 * - Nav Items
 *Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *      -Img
 *      -Name of restaurant, Star Rating, cuisine, delery time
 *Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 * we will keps this as as reference
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
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
  );
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        // i dont have coludinary link
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/5f74ca6a-2a92-4810-a6a0-ace38aa6cc31_886af383-53f2-4ee0-8393-10ec944f21c7.JPG"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(",")} </h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime}minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: "151656",
    name: "Dev International",
    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
    locality: "khajri road",
    areaName: "Mohan Nagar",
    costForTwo: "₹100 for two",
    cuisines: ["Chinese", "Fast Food", "Beverages"],
    avgRating: 4.2,
    parentId: "71556",
    avgRatingString: "4.2",
    totalRatingsString: "590",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 13.6,
      serviceability: "SERVICEABLE",
      slaString: "55-65 mins",
      lastMileTravelString: "13.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-10-13 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151657",
    name: "Fast Food",
    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
    locality: "khajri road",
    areaName: "Mohan Nagar",
    costForTwo: "₹100 for two",
    cuisines: ["Chinese", "Fast Food", "Beverages"],
    avgRating: 4.2,
    parentId: "71556",
    avgRatingString: "4.2",
    totalRatingsString: "590",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 13.6,
      serviceability: "SERVICEABLE",
      slaString: "55-65 mins",
      lastMileTravelString: "13.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-10-13 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151658",
    name: "Dev Beverages ",
    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
    locality: "khajri road",
    areaName: "Mohan Nagar",
    costForTwo: "₹100 for two",
    cuisines: ["Chinese", "Fast Food", "Beverages"],
    avgRating: 4.2,
    parentId: "71556",
    avgRatingString: "4.2",
    totalRatingsString: "590",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 13.6,
      serviceability: "SERVICEABLE",
      slaString: "55-65 mins",
      lastMileTravelString: "13.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-10-13 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];
// ! Not using keys (not acceptable) <<<<< index as ket <<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard
          // passing props to the component
          // resName="meghana food"
          // cuisine="Biryani, North Indian, Asian"
          resData={resList[0]}
          //resdata is props and resobj object passing
        />
        {/* <RestaurantCard resName="kfc" cuisine="burger" /> */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
