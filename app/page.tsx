import { map } from "lodash";
import Link from "next/link";
import { restaurantsByLocation } from "./restaurants";

export default function Home() {
  return (
    <main className="p-16">
      <h1 className="text-center text-xl font-black mb-8">Voedselgrep!</h1>

      {map(restaurantsByLocation, (restaurants, location) => (
        <section key={location} className="rounded-md bg-white mb-8 shadow-md">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <header className="text-base font-semibold leading-6 text-gray-900">
              {location}
            </header>
          </div>
          <div className="flex flex-row">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                href={`/restaurants/${restaurant.id}`}
                className="block w-64 h-32 p-4 m-4 bg-amber-200 rounded-md font-bold"
              >
                {restaurant.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
