import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useUnAuth } from '../hooks/unAuth';
import { ProductResponse } from '../types/products';


const Home = () => {

  const { itiAxios, refreshToken } = useContext(AppContext);

  const { data, isLoading, error } = useQuery<ProductResponse, AxiosError>({
    queryKey: ['products', refreshToken],
    queryFn: async () => {
      return (await itiAxios.get('/products')).data;
    },
    retry: 0
  })

  useUnAuth(error as AxiosError);



  return (
    <div className='iti-w-full iti-grid iti-grid-cols-3 iti-gap-x-2 iti-gap-y-6'>
      { isLoading? 'Loading' : data?.products.map((record) => (
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