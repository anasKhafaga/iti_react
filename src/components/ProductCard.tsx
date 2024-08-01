import type { ComponentProps } from "react";
import React, { useState } from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: string;
  image: string;  
  prodID: number;
  setCartItems: React.Dispatch<React.SetStateAction<number[]>>;
}

const ProductCard = ({ name, price = 'N/A', image, children, prodID, setCartItems, ...props }: ProductCardProps) => {

  const [added, setAdded] = useState(false);
  
  if(!Boolean(name)) {
    return null;
  }
  
  const handleAddingItem = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget);
    if(!added) {
      console.log(`${name} is added to the cart`);
      setAdded(true);
      setCartItems(items => [...items, prodID])
    }
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
        <button onClick={handleAddingItem.bind(null, name)}>{added? "Added" : "Add to Cart"}</button>
        <button>Wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;
