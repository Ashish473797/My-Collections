import CollectionNewsLetter from "./components/CollectionNewsLetter/CollectionNewsLetter";
import CollectionBanner from "./components/CollectionBanner/CollectionBanner";
import CollectionFeature from "./components/CollectionFeature/CollectionFeature";
import CollectionProducts from "./components/CollectionProducts/CollectionProducts";

export default function Collections() {
  
  return (
    <>
      <CollectionBanner />
      <CollectionProducts />
      <CollectionFeature />
      <CollectionNewsLetter />
    </>
  );
}
