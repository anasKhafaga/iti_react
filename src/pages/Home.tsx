import data from '../data/products.json';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className='iti-w-full iti-grid iti-grid-cols-3 iti-gap-x-2 iti-gap-y-6'>
      {data.map(record => (
        <ProductCard
          key={record.id}
          name={record.name}
          price={record.price} 
          image={record.image} 
          prodID={record.id}
        />
      ))}
    </div>
  )
}

export default Home