import data from './data/products.json';
import ProductCard from './components/ProductCard';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState<number[]>([]);

  console.log(cartItems)

  return (
    <main className='container'>
      {data.map(record => (
        <ProductCard 
          key={record.id}
          name={record.name}
          price={record.price} 
          image={record.image} 
          prodID={record.id}
          className="custom-card"
          setCartItems={setCartItems}
        />
      ))}
    </main>
  )
}

export default App
