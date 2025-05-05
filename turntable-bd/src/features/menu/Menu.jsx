import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { Helmet } from "react-helmet";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div>
      <Helmet>
        <title>Menu - Your Turntable Store</title>
        <meta
          name="description"
          content="Explore a wide selection of turntables, parts, and accessories available for purchase."
        />
        <meta
          name="keywords"
          content="turntables, audio, music, accessories, parts, shop"
        />
        <meta property="og:title" content="Menu - Your Turntable Store" />
        <meta
          property="og:description"
          content="Explore a wide selection of turntables, parts, and accessories available for purchase."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/%F0%9F%8E%B5Turntables"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-1.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-2.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-3.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-4.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-5.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-6.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-7.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-8.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-8.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-10.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-11.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-12.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-13.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-14.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-15.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-16.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-17.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-18.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-19.jpg"
        />
        <meta
          property="og:image"
          content="https://turntable-pi.vercel.app/images/turntable-20.jpg"
        />
      </Helmet>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  -mt-8">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
