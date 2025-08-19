import React from 'react'
import './product.css'

const Product = () => {

    const products = [
        {id:1, name:"Laptop",description:"High performance laptop",price:65000},
        {id:2, name:"Mobile",description:"Smart Phone with 5g",price:30000},
        {id:3, name:"HeadPhones",description:"Wireless Bluetooth headphones",price:2000},
        {id:4, name:"Tv",description:"Latest model with new features",price:25000},
    ]
  return (
    <div className='product-container'>
        <h2 className='title'>Product List</h2>
        <table className='product-table'>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price(&#8377;)</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                <tr key ={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>
           ) )}
            </tbody>
        </table>

    </div>
  )
}

export default Product