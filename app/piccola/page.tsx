"use client";

import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [filter, setFilter] = useState("")
  const products = data.filter(product => (product.name.includes(filter) || product.description.includes(filter)));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="text" placeholder="Grep" value={filter} onChange={e => setFilter(e.target.value)} />
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
