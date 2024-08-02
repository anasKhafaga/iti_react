import type { ComponentProps } from "react";
import React, { useState } from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: number;
  image: string;  
  prodID: number;
}

const ProductCard = ({ name, price = 0, image, children, prodID, ...props }: ProductCardProps) => {
  
  if(!Boolean(name)) {
    return null;
  }
  
  return (
    <div className="iti-w-full iti-max-w-sm iti-bg-white iti-border iti-border-gray-200 iti-rounded-lg iti-shadow dark:iti-bg-gray-800 dark:iti-border-gray-700" {...props}>
        <a href="#">
            <img className="iti-p-8 iti-rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="iti-px-5 iti-pb-5">
            <a href="#">
                <h5 className="iti-text-xl iti-font-semibold iti-tracking-tight iti-text-gray-900 dark:iti-text-white">{name}</h5>
            </a>
            <div className="iti-flex iti-items-center iti-mt-2.5 iti-mb-5">
                <div className="iti-flex iti-items-center iti-space-x-1 rtl:iti-space-x-reverse">
                    <svg className="iti-w-4 iti-h-4 iti-text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="iti-w-4 iti-h-4 iti-text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="iti-w-4 iti-h-4 iti-text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="iti-w-4 iti-h-4 iti-text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="iti-w-4 iti-h-4 iti-text-gray-200 dark:iti-text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <span className="iti-bg-blue-100 iti-text-blue-800 iti-text-xs iti-font-semibold iti-px-2.5 iti-py-0.5 iti-rounded dark:iti-bg-blue-200 dark:iti-text-blue-800 iti-ms-3">5.0</span>
            </div>
            <div className="iti-flex iti-items-center iti-justify-between">
                <span className="iti-text-3xl iti-font-bold iti-text-gray-900 dark:iti-text-white">${price}</span>
                <a href="#" className="iti-text-white iti-bg-blue-700 hover:iti-bg-blue-800 focus:iti-ring-4 focus:iti-outline-none focus:iti-ring-blue-300 iti-font-medium iti-rounded-lg iti-text-sm iti-px-5 iti-py-2.5 iti-text-center dark:iti-bg-blue-600 dark:hover:iti-bg-blue-700 dark:focus:iti-ring-blue-800">Add to cart</a>
            </div>
        </div>
    </div>

  )
};

export default ProductCard;
