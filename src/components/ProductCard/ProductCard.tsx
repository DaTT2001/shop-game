import React from "react";
import productCard from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../services/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
import { addToCartApi } from "../../services/api/api";

//khai bao platform
const PC = 4
const NINTENDO = 18
const PS4 = 9
const PS5 = 187

const getClassByRate = (rating : number) : string => {
    // xử lý tên class dựa theo rating
    if(rating >= 80) {
      return "blue"
    }
    else if(rating < 80 && rating >=60) {
      return "yellow"
    }
    else if(rating < 60 && rating >=40) {
      return "orange"
    }
    else {
      return "red"
    }
} 
const getPrice = (rating : number): number => {
    // xử lý giá trị của game
    if(rating === 0) {
        return 0.99
      }
      return Math.round((rating) * 300)/100
}
const showGenre = (genres : any): any => {
    let result = ''
    for(let i = 0; i < genres.length - 1; i++) {
      result = result + genres[i].name + ", "
    }
    result = result + genres[genres.length - 1].name + "."
    return result
}
const showPlatforms = (platform : any): JSX.Element => {
    let platformIcons: JSX.Element[] = []
    const result = []
    for(let i = 0; i < platform.length; i++) {
      result.push(platform[i].platform.id)
    }
    if (result.includes(PC)) {
        platformIcons.push(<i className="bi bi-windows" key="pc-icon"></i>);
      }
      if (result.includes(NINTENDO)) {
        platformIcons.push(<i className="bi bi-nintendo-switch" key="nintendo-icon"></i>);
      }
      if (result.includes(PS4) || result.includes(PS5)) {
        platformIcons.push(<i className="bi bi-playstation" key="playstation-icon"></i>);
      }
    
      return <>{platformIcons}</>;
  }
const ProductCard = ({ id, background_image, name, metacritic, rating, genres, platforms }: ProductCardProps) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.addToCard)
  return (
    <div className={productCard["product-card"]}>
      <Link to={`/product/${id}`}>
        <img src={background_image} alt="" />
      </Link>
      <div className={productCard["product-info"]}>
        <Link to={`/product/${id}`}>
          <div className="info-name-price">
            <p>{name}</p>
          </div>
          <div className={productCard["price-rating"]}>
            <h6>
              Price: <span>€{getPrice(rating)}</span>
            </h6>
            <div className={productCard["product-rating"] +" "+ productCard[`${getClassByRate(metacritic)}`]}>{metacritic}</div>
          </div>
        </Link>
      </div>
      <div className={productCard["product-overview"]}>
        <p>Genres: {showGenre(genres)}</p>
        <div className={productCard["platforms-icon"]}> {showPlatforms(platforms)}
        <span className={productCard["add-to-cart"]} ><span onClick={() => { dispatch(addToCart({ id, background_image, name, metacritic, rating, genres, platforms, quantity: 0 }));}}><i className="bi bi-cart-plus-fill"></i></span></span>
        </div>
        </div>
    </div>
  );
};

export default ProductCard;
