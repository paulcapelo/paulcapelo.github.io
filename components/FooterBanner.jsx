import React from "react";
import Link from "next/link";

const FooterBanner = ({
  footerBanner: {
    discount = "",
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    buttonText,
    product,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <p>{largeText2}</p>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <p>{saleTime}</p>
          <Link href={`/product/${product.current}`}>
            <button type={"button"} className="">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
