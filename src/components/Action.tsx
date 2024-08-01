import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

interface ActionProps {
  prodID: number;
  added: boolean;
  setAdded: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}

const Action = ({ prodID, added, setAdded, name }: ActionProps) => {

  const { setCartItems } = useContext(AppContext);
  
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
    <div className="product-children">
      <button onClick={handleAddingItem.bind(null, name)}>{added? "Added" : "Add to Cart"}</button>
      <button>Wishlist</button>
    </div>
  )
}

export default Action