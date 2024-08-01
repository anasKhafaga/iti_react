import type { ComponentProps } from "react";
import React from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: string;
  image: string;  
}

const ProductCard = ({ name, price = 'N/A', image, children, ...props }: ProductCardProps) => {
  if(!Boolean(name)) {
    return null;
  }
  
  const handleAddingItem = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget);
    console.log(`${name} is added to the cart`);
  };
  
  return (
    <div className="product-card" {...props}>
      {Boolean(image) ? 
        <img src={image} alt={`${name} image`} className="product-image" />
        :
        <h3>No image provided</h3>
      }
      <h2 className="iti-flex">{name}</h2>
      
      <p className="product-price">{Boolean(price) ? price : 'This item is currently unavilable'}</p>

      <div className="product-children">
        <button onClick={handleAddingItem.bind(null, name)}>Add to Cart</button>
        <button>Wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;
