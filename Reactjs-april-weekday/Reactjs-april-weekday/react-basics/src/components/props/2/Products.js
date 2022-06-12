import React from 'react';
import Product from './Product';

const Items = [
    {
       id:1,
       title:'Imac',
       price:4500,
       image:'https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id:2,
        title:'Ipad',
        price:2500,
        image:'https://images.unsplash.com/photo-1632633726419-3e5e7d74ca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
     },
     {
        id:3,
        title:'Iphone 11',
        price:800,
        image:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
     },
     {
        id:4,
        title:'Keyboard',
        price:90,
        image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
     }


]

const Products = () => {
  return (
    <div className='container'>
         <div className='row'>

             <h2 className='text-center m-2 text-info'>Products</h2>
             {Items.map((item)=>{

                 return <Product key={item.id} item={item}></Product>

             })
                 
             }
          
         </div>

    </div>
   
  )
}

export default Products