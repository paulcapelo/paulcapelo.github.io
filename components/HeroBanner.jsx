import Link from "next/link";
import React from "react";
import { urlFor } from "@/lib/Client";
const HeroBanner = ({ bannerData }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"> {bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <h1>{bannerData.largeText1}</h1>
        <img
          className="hero-banner-image"
          src={urlFor(bannerData.image)}
          alt="hero banner"
        />
        <div >
          <Link href={`/product/${bannerData.product}`}>
            <button className="button"> {bannerData.buttonText} </button>
          </Link>
          <div className="desc">
            <h5>Descripcion</h5>
            <p> {bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
