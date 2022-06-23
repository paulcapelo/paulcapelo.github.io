import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/Client";

const HeroBanner = ({
  product: {
    defaultProductVariant: { images,price },
    title,
    slug,
  },
}) => {
  return (
    <div>
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card">
          <img
            src={urlFor(images.length && images[0])}
            alt="cscscsasca"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default HeroBanner;
