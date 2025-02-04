import Image from 'next/image';
import React from 'react'
import { BsCartDash } from "react-icons/bs";

interface Iproducts {
  id: number;
  title: string;
  price: string;
  old_price?: string;
  img_url: string;
  selling?:string,
}

const products: Iproducts[] = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-1.png",
    selling:"New",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-2.png",
    selling:"Sales",
    old_price:"$30",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-3.png",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: "$20",
    img_url: "/featured-product-4.png",
  },
]


function Featuredproduct() {
  return (
    <div className='mt-32 mb-40'>
    <h1 className='font-medium text-center text-3xl mb-10 mt-10'>Our Products</h1>
    <div className='flex flex-wrap justify-center gap-8 ml-10'>

      {
        products.map((data) => {
          return(
            <div key={data.id} className='relative overflow-hidden'>
      
        {data.selling && (data.id === 1 || data.id === 2) && (
          <span
            className={`absolute top-3 left-4 px-3 py-1 text-xs text-white ${
              data.selling === "Sales" ? "bg-orange-500" : "bg-green-500"
            }`}
          >
            {data.selling}
          </span>
        )}
             
              <Image src={data.img_url} alt='' width={250} height={250} className='transition-transform duration-300 hover:scale-110'></Image>
        
               <div className='flex items-center'>
               <span className='mt-5'>
                        <p className='font-sans hover:text-cyan-500'>{data.title}</p>
                        <span className='flex gap-2'>
                        <p className='font-bold'>{data.price}</p>
                        <p className='font-medium text-gray-400 line-through'>{data.old_price}</p>
                        </span>      
                      </span>
                      <span className=' bg-gray-300 hover:bg-cyan-500 hover:text-white p-2 ml-16 rounded-lg mt-5'>
                      <BsCartDash />
                    </span>
                </div>
               </div>
             
           
          )
        })
      }
      
       </div>
    
  </div>
  )
}

export default Featuredproduct


