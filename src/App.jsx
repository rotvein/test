import React, { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbx8pb0_eZAbBPZ6-UU67BJKMaGnWEVGJEzGv2hp4u8hKLn4if-SAhUH6fDXI3pTA2U-/exec',
    ) // Replace with your actual API endpoint
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-6 py-3 text-left">
                Product Name
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-6 py-3">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {product.price}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {product.quantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 px-6 py-3 text-center"
                >
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
