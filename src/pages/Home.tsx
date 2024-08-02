import ProductCard from '../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductResponse } from '../types/products';

const Home = () => {

  const { data, isLoading } = useQuery<ProductResponse>({
    queryKey: ['products'],
    queryFn: async() => {
      return (await axios.get('https://dummyjson.com/products')).data
    }
  })
  
  return (
    <div className='iti-w-full iti-grid iti-grid-cols-3 iti-gap-x-2 iti-gap-y-6'>
      {isLoading? "Loading" : data?.products.map(record => (
        <ProductCard
          key={record.id}
          name={record.title}
          price={record.price} 
          image={record.images[0]} 
          prodID={record.id}
        />
      ))}
    </div>
  )
}

export default Home