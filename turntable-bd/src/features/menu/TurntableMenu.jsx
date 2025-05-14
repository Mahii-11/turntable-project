import { useLoaderData } from "react-router-dom";
import { getTurntableParts } from "../../services/apiRestaurant";
import TurntableItem from "./TurntableItem";
import { Helmet } from "react-helmet";

function TurntableMenu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <>
      <Helmet>
        <title>Turntable Parts | BD Turntable</title>
        <meta
          name="description"
          content="Explore high-quality turntable parts including belts, hinges, and tonearms at BD Turntable. Premium components for the best sound experience."
        />
        <meta
          name="keywords"
          content="turntables, audio, music, accessories, parts, shop"
        />
        <meta
          property="og:title"
          content="Turntable Parts - Your Turntable Store"
        />
        <meta
          property="og:description"
          content="Explore a wide selection of turntables, parts, and accessories available for purchase."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/PartsHub"
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
      </Helmet>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  -mt-8">
        {menu.map((item) => (
          <TurntableItem item={item} key={item._id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getTurntableParts();
  return menu;
}

export default TurntableMenu;
