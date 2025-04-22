import { useLoaderData } from "react-router-dom";
import { getTurntable } from "../../services/apiRestaurant";
import TurntableItem from "./TurntableItem";

function TurntableMenu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-900 -mt-8">
      {menu.map((item) => (
        <TurntableItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getTurntable();
  return menu;
}

export default TurntableMenu;
