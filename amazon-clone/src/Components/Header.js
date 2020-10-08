import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart"
import "./Header.css";
import {useStateValue} from "./StatePrivider";

function Header(){
  const [{basket}]=useStateValue();
  return (
    <nav className="header">
    {/*Logo on the left->img
        Search box
        SignIn
        Returns and orders
        Your Prime
        Basket icon with a number*/}
        <Link to="/">
          <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="text"/>
          <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
          <Link className="header_link" to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">hello Juan</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
          </Link>
          <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          </Link>
          <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          </Link>
          <Link className="header_link" to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="header_shoppingIcon"/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header
