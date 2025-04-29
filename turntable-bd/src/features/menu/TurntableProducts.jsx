import { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "./MenuItem";

export default function TurntableProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:50010/api/admin/products"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((item) => {
        console.log("Rendering product:", item); // Check each product
        return <MenuItem key={item._id} item={item} />;
      })}
    </ul>
  );
}
