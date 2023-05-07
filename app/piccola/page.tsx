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

  let products = data.filter(product => (product.name.includes(filter) || product.description.includes(filter)));

  if (hungry) {
    const idx = getRandomIntInclusive(0, products.length - 1)
    products = [products[idx]]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="text" placeholder="Grep" value={filter} onChange={e => setFilter(e.target.value)} />

      <label>
        <input type="checkbox" checked={hungry} onChange={e => setHungry(e.target.checked)} />
        Ik heb NU honger
      </label>


      <table className="border-2">
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
    </main>
  );
}
