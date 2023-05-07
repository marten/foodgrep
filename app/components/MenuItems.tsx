import { groupBy, map } from "lodash";
import { MenuItem } from "../types";
import { NoFood } from "./NoFood";

interface Props {
  menuItems: MenuItem[];
}

export const MenuItems: React.FC<Props> = (props) => {
  if (props.menuItems.length === 0) {
    return <NoFood />;
  }

  const byCategory = groupBy(props.menuItems, (item) => item.category);

  return (
    <table className="table-auto min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th className="w-8 text-left">ID</th>
          <th className="text-left">Naam</th>
          <th className="text-left">Wat</th>
          <th className="w-16 text-left">Prijs</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {map(byCategory, (items, category) => (
          <>
            <tr className="border-t border-gray-200">
              <th
                colSpan={5}
                scope="colgroup"
                className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                {category}
              </th>
            </tr>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  );
};
