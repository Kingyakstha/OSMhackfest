import React from "react";
import "./movers.css";
import CardItem from "CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li className="cards__item">
              <Link className="cards__item__link">
                <figure
                  className="cards__item__pic-wrap"
                  data-category="Adventure"
                >
                  <img
                    className="cards__item__img"
                    alt="Travel Image"
                    src="nami.svg"
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">
                    Explore the hidden waterfall deep inside the Amazon Jungle
                  </h5>
                </div>
              </Link>
            </li>
            {/* <CardItem
              src="nami.svg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            /> */}
          </ul>
          <ul className="cards__items">
            <CardItem
              src="nami.svg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="nami.svg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="nami.svg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
