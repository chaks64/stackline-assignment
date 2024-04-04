import React from "react";
import { useAppSelector } from "../app/hooks";
import { ProductReviewContainer } from "../StyledComponents";

const ProductReview: React.FC = () => {
  const product = useAppSelector((app) => app.product);
  return (
    <ProductReviewContainer>
      <div className="metadata">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-subtitle">{product.subtitle}</p>
      </div>

      <div className="tags">
        {product.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </ProductReviewContainer>
  );
};

export default ProductReview;
