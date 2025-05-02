import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  -mt-8">
      {menu.map((item) => (
        <MenuItem item={item} key={item._id} />
      ))}
    </ul>
  );
}

export async function loader() {
  try {
    const menu = await getMenu();
    return menu ?? [];
  } catch (err) {
    console.error("Loader error:", err);
    return [];
  }
}

export default Menu;
