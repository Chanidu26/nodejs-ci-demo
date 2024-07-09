import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products,setproducts] = useState([])

  const fetchdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    setproducts(response.data)
  }
  useEffect(()=>{
    fetchdata()
  },[]);

  return (
    <div className="App">

      {products.map((product)=>(
        <div key={product.id} className='product'>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <h3>$ {product.price}</h3>
        </div>
      ))}
     
    </div>
  );
}

export default App;
