"use client";

import { useState } from "react";
import data from "./data.json";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function Home() {
  const [filter, setFilter] = useState("");
  const [hungry, setHungry] = useState(false);

  let products = data.filter(
    (product) =>
      product.name.includes(filter) || product.description.includes(filter)
  );

  if (hungry) {
    const idx = getRandomIntInclusive(0, products.length - 1);
    products = [products[idx]];
  }

  return (
    <main className="p-4">
      <div className="b-2 rounded-md bg-amber-200 p-4 mb-4">
        <input
          type="text"
          placeholder="Grep"
          autoFocus
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={hungry}
            onChange={(e) => setHungry(e.target.checked)}
          />
          Ik heb NU honger
        </label>
      </div>

      <div className='border-2 p-2 rounded-md'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categorie</th>
              <th>Naam</th>
              <th>Wat</th>
              <th>Prijs</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={`${product.category}-${product.id}`}>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
