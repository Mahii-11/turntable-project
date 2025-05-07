import { getTurntableDetails } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import TurntableDetailItem from "./TurntableDetailItem";

function TurntableDetails() {
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <TurntableDetailItem item={item} key={item._id} />
    </div>
  );
}

export async function loader({ params }) {
  return await getTurntableDetails(params.turntableId);
}

export default TurntableDetails;
