import React, { useState } from "react";
import { Data } from "./ProductData";

const Product = () => {
  const [product, setProduct] = useState(Data);
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  const filter = (type) => {
    setProduct(Data.filter((item) => item.type === type));
  };



  return (
    <div>
      <div className="flex items-center justify-between py-5 bg-white shadow-lg">
        <div>
          <h1 className="mx-3 text-2xl font-bold">Filter Product</h1>
        </div>

        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Here..."
            onChange={handleClick}
            className="px-5 py-1 border-2 border-gray-500 rounded outline-none"
          />
        </div>

        <div>
          <ul className="flex items-center list-none">
            <li className="mx-5">
              <button
                onClick={() => setProduct(Data)}
                className="px-5 py-1 text-white bg-black rounded"
              >
                All
              </button>
            </li>
            <li className="mx-5">
              <button
                onClick={() => filter("Mobile")}
                className="px-5 py-1 my-3 text-white bg-red-500 rounded"
              >
                Mobiles
              </button>
            </li>
            <li className="mx-5">
              <button
                onClick={() => filter("laptop")}
                className="px-5 py-1 my-3 text-white bg-blue-600 rounded"
              >
                Laptops
              </button>
            </li>
            <li className="mx-5">
              <button
                onClick={() => filter("camera")}
                className="px-5 py-1 my-3 text-white bg-green-500 rounded"
              >
                Cameras
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Product List */}
      <div className="grid my-5 md:grid-cols-4">
        {product
          .filter((item) => item.name.toLocaleLowerCase().includes(search))
          .map((elem, id) => {
            return (
              <div key={elem.id} className="max-w-sm mx-5 my-5 overflow-hidden scale-90 border border-black rounded shadow-lg">
                <img className="w-[10rem]" src={elem.image} alt="Card Image" />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{elem.name}</div>
                  <p className="text-base text-gray-700">
                   Rs. {elem.price}
                  </p>
                </div>
               
              </div>
            );
          })}
      </div>

      {/* end */}
    </div>
  );
};

export default Product;
