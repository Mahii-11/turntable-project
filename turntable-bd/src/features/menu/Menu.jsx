/*import { useLoaderData } from "react-router-dom";
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
  const menu = await getMenu();
  return menu;
}

export default Menu; */

import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const { items, currentPage, totalPages } = useLoaderData();

  return (
    <div className="p-6 -mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10 text-white">
        <a
          href={`/turntable?page=${currentPage - 1}`}
          className={`px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition ${
            currentPage <= 1 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Previous
        </a>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <a
          href={`/turntable?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition ${
            currentPage >= totalPages ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Next
        </a>
      </div>
    </div>
  );
}

// Use loader to get the current page from URL
export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = 12;

  const { items, currentPage, totalPages } = await getMenu(page, limit);
  return { items, currentPage, totalPages };
}

export default Menu;
