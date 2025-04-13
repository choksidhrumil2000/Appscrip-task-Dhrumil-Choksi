import ProductSection from "../../Components/ProductSection/ProductSection";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
}

export default async function MainSection() {
  const data = await getProducts();
  return <ProductSection data={data} />;
}
