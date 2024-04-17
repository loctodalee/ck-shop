import { useEffect } from "react";
import Blog from "./Blog";
import Category from "./Category";
import Latest from "./LatestCollection";
import NewArrivals from "./NewArrivals";
import SpecialOffer from "./SpecialOffer";

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Latest />
      <NewArrivals />
      <Category />
      <SpecialOffer />
      <Blog />
    </>
  );
}

export default HomePage;
