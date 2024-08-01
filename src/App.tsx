import data from './data/products.json';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <main className='container'>
      {data.map(record => (
        <ProductCard 
          key={record.id}
          name={record.name}
          price={record.price} 
          image={record.image} 
          className="custom-card"
        />
      ))}
    </main>
  )
}

export default App
