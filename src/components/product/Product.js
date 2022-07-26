import React from "react";

function Product({src, title, description}) {
  return (
    <section className="product">
      <div className="product__container">
      <h2 className="product__title">{title}</h2>
      <div className="product__box">
        <img src={src} alt="" className="product__image"/>
        <p className="product__description">{description}</p>
      </div>
      </div>
    </section>
  )
}

export default Product;