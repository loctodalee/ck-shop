import CollectionBanner from "~/components/Layouts/component/banner/CollectionBanner";
import HomeBanner from "~/components/Layouts/component/banner/HomeBanner";
import NewArrivalsBanner from "~/components/Layouts/component/banner/NewArrivalsBanner";
import CollectionPage from "~/pages/CollectionPage";
import NewArrivals from "~/pages/NewArrivalsPage";

const { default: BannerLayout } = require("~/components/Layouts/BannerLayout");
const { default: HomePage } = require("~/pages/HomePage");

const publicRoutes = [
  { path: "/", component: HomePage, layout: BannerLayout, Banner: HomeBanner },
  {
    path: "/new-arrivals",
    component: NewArrivals,
    layout: BannerLayout,
    Banner: NewArrivalsBanner,
  },
  {
    path: "/collections",
    component: CollectionPage,
    layout: BannerLayout,
    Banner: CollectionBanner,
  },
];

export { publicRoutes };
