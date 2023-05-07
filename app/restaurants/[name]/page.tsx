"use client";

import { MenuItems } from "@/app/components/MenuItems";
import { getRestaurant } from "@/app/restaurants";
import { MenuItem } from "@/app/types";
import { useState } from "react";

type Params = { name: string };

export default function RestaurantPage({ params }: { params: Params }) {
  const [filter, setFilter] = useState("");
  const [hungry, setHungry] = useState(false);

  const restaurant = getRestaurant(params.name);
  let matches = grep(restaurant.menu, filter);

  if (hungry) {
    const idx = getRandomIntInclusive(0, matches.length - 1);
    matches = [matches[idx]];
  }

  return (
    <main className="p-4">
      <header className="text-lg mb-4">
        {restaurant.name}, {restaurant.location}.
        {restaurant.phone && (
          <a
            href={`tel:${restaurant.phone.replaceAll(" ", "")}`}
            className="ml-2"
          >
            {restaurant.phone}
          </a>
        )}
      </header>

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

      <div className="border-2 p-2 rounded-md">
        <MenuItems menuItems={matches} />
      </div>
    </main>
  );
}

function grep(menuItems: MenuItem[], searchString: string): MenuItem[] {
  const terms = searchString
    .split(" ")
    .map((term) => term.trim().toLowerCase());

  if (terms.length === 0) return menuItems;

  return menuItems.filter((menuItem) =>
    terms
      .map((term) => isMatch(menuItem, term))
      .reduce((acc, curr) => acc && curr, true)
  );
}

function isMatch(menuItem: MenuItem, term: string) {
  return (
    menuItem.name.toLowerCase().includes(term) ||
    menuItem.description?.toLowerCase()?.includes(term)
  );
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
