import React from "react";

function Product({src, title, description}) {
  return (
    <section>
      <img src={src} alt="" className="activities__image"/>
      <div className="activities__text">
        <h2 className="activities__title">{title}</h2>
        <p className="activities__description">{description}</p>
      </div>
    </section>
  )
}

export default Product;