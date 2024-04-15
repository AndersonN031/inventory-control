import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/products").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((product, i) => (
          <div key={i}>
            <h1>{product.name}</h1>
            <p>Qnt. {product.quantity}</p>
            <p>Preço: R${product.price}</p>
            <p>Descrição: {product.description}</p>
            <p>id: {product._id}</p>
          </div>
        ))
      )}
    </div >
  );
}

export default App;
