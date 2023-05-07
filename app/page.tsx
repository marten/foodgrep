import { map } from 'lodash'
import Link from 'next/link'
import { restaurantsByLocation } from './restaurants'

export default function Home() {
  return (
    <main className='p-4'>
      {map(restaurantsByLocation, (restaurants, location) => (
        <div key={location} className="m-4">
          <header>{location}</header>
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`} className="block w-64 h-64 p-4 m-4 bg-amber-200 rounded-md font-bold">{restaurant.name}</Link>
          ))}
        </div>
      ))}
    </main>
  )
}
