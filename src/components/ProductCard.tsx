import type { ComponentProps } from "react";
import React, { useState } from "react";
import Action from "./Action";

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
  
  return (
    <div className="product-card" {...props}>
      {Boolean(image) ? 
        <img src={image} alt={`${name} image`} className="product-image" />
        :
        <h3>No image provided</h3>
      }
      <h2 className="iti-flex">{name}</h2>
      
      <p className="product-price">{Boolean(price) ? price : 'This item is currently unavilable'}</p>

      <Action prodID={prodID} added={added} setAdded={setAdded} name={name} />
    </div>
  );
};

export default ProductCard;
