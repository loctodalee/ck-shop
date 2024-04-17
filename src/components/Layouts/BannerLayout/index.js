import HomeBanner from "../component/banner/HomeBanner";
import Footer from "../component/footer";
import Header from "../component/header";
import ScrollToTopButton from "../component/scrollToTopButton";
import Shipping from "../component/shipping";

function BannerLayout({ children, Banner }) {
  console.log(Banner);
  return (
    <div>
      <Header />
      {/* <HomeBanner /> */}
      <Banner />
      {children}
      <Shipping />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default BannerLayout;
