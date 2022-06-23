import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import Link from "next/link";
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
const HeroBanner = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="">JDSM KitKat</Link>
      </p>
      <button className="cart-icon" type="button" onClick={()=>setShowCart(true)}>
        <AiOutlineShop />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default HeroBanner;
