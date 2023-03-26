import React, { useEffect, useState } from 'react'

import './App.css'
function App() {

  const api_base = 'https://fakestoreapi.com/products'

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await (await fetch(api_base)).json()
      console.log(data)
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>All Products</h2>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((obj) => {
              return (
                <tr>
                  <td><img src={obj.image} alt="" /></td>
                  <td>{obj.title}</td>
                  <td>{obj.rating.count}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
