import React from "react";

function Product({children, title}) {
  return (
    <section className="product">
      <div className="product__container">
      <h2 className="product__title">{title}</h2>
      {children}
      </div>
    </section>
  )
}

export default Product;