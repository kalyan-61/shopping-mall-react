import React from "react";

const WomanCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6} = props.ladiesFashion;
  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" alt="" />
      </div>

      <div className="menImages">
        {[{ img: image1, price: price1 }, { img: image2, price: price2 }, { img: image3, price: price3 }, { img: image4, price: price4 }, { img: image5, price: price5 }, { img: image6, price: price6 }].map((item, index) => (
          <div key={index} className="imageContainer">
            <img src={item.img} alt={title} />
            <div className="priceTag">Rs.{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomanCollection;
