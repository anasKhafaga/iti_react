import data from './data/products.json';
import ProductCard from './components/ProductCard';
import { useState } from 'react';

import { AppContext } from './contexts/AppContext';

function App() {

  const [cartItems, setCartItems] = useState<number[]>([]);

  console.log(cartItems)

  return (
    <main className='container'>
      <AppContext.Provider value={{ setCartItems }}>
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
      </AppContext.Provider>
    </main>
  )
}

export default App
