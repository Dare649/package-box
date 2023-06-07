import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const App = () => {

  const [box, setBox] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() =>{
    axios.get('/products')
    .then(res =>{
      setBox(Object.keys(res.data[0]))
      setPost(res.data)
    })
  }, [])


  return (
    <div>
      {
        post.map((product) =>{
          return (
            <div className='container mx-auto px-6'>
              <div className='container mx-auto active:bg-sky-200 bg-slate-50 rounded-3xl w-full md:w-2/4 '>
              <div key={product.id} className='flex flex-row my-5 p-4 ml-1'>
                <div className='basis-1/2 w-1/2 overflow-hidden'>
                  <p className='text-3xl mb-2 font-bold text-slate-500 capitalize'>{product.product}</p>
                  <p className='text-xs font-bold mb-2'>{product.weight}</p>
                  <p className='text-lg mb-2'>{product.email}</p>
                  <p className='text-lg mb-2'>{product.contact}</p>
                </div>
                <div className='basis-1/2 ml-8 '> 
                  <div className='sm:mt-5 flex flex-col gap-2 mt-4 w-20 float-right'>
                    <p className='text-xl font-bold'>{product.status}</p>
                    <Link to={`/proceed/${product.id}`} className='bg-emerald-500 hover:bg-emerald-300 text-white text-center py-2 rounded '>
                      Proceed
                    </Link>
                    <button className=' bg-red-600 hover:bg-red-400 p-2 text-white rounded'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
