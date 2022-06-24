import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { PortableText } from "@portabletext/react";

import { client, urlFor } from "../lib/Client";
import { Product } from "../components/index";
import { useStateContext } from "../../context/StateContext";

const components = {
  types: {
    image: ({ value }) => <img src={urlFor(value.asset)} />,
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const ProductDetails = ({ product, products }) => {
  //   const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  // decQty, incQty, qty,
  const { qty, incQty, decQty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  console.log("products, product", product);

  const {
    pdatedAt,
    // blurb: {_type: 'localeString', en: 'One of the most fun Kracie kits to make!'}
    // body: {_type: 'localeBlockContent', en: Array(4)}
    categories,

    tags,
    body,
    variants,
    vendor,

    defaultProductVariant: { images, price, barcode },
    title,
    slug,
  } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(images && images[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {images?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{title}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Detalles: </h4>
          <p>{slug?.current}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Cantidad:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Anade al carrito
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Compra ahora
            </button>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={body.en} components={components} />,
      </div>

      <div className="maylike-products-wrapper">
        <h2>Tal vez te guste algo mas</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
        slug{current}
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const queryBanner = `*[_type == "product"]`;
  const products = await client.fetch(queryBanner);

  return { props: { products, product } };
};

export default ProductDetails;
