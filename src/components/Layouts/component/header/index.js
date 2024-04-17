import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.boxShadow =
      "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  } else {
    document.getElementById("header").style.boxShadow = "none";
  }
};
function Header() {
  return (
    <div
      id="header"
      className=" h-24 grid grid-flow-col justify-stretch content-center items-center fixed z-50 w-dvw bg-white pl-6"
    >
      <div className="item-left flex">
        <div className="search-icons py-10 mx-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <div className="category-filter-item py-10 group">
          <p className="text-sm font-medium relative ">
            Shop By Category
            <FontAwesomeIcon icon={faAngleDown} className="text-sm ml-1 mt-1" />
          </p>
          <ul className="absolute w-48 shadow-2xl  z-10 hidden group-hover:block top-[95px] bg-white">
            <li className="p-3 text-sm font-medium hover:bg-slate-400">
              Accessories
            </li>
            <li className="p-3 text-sm font-medium hover:bg-slate-400">
              Bottoms
            </li>
            <li className="p-3 text-sm font-medium hover:bg-slate-400">
              Dresses
            </li>
            <li className="p-3 text-sm font-medium hover:bg-slate-400">
              Footwear
            </li>
            <li className="p-3 text-sm font-medium hover:bg-slate-400">Tops</li>
          </ul>
        </div>

        <div className="new-arrivals-item mx-3 text-sm font-medium py-10">
          <Link to="/new-arrivals">New Arrivals</Link>
        </div>
        <div className="collection mx-3 py-10 text-sm font-medium">
          <Link to="/collections">Collection</Link>
        </div>
      </div>
      <div className="logo-center">
        <Link to="/">
          <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/site-logo.svg" />
        </Link>
      </div>

      <div className="item-right flex justify-end mr-12">
        <div className="instagram m-2 text-lg">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="facebook m-2 text-lg">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="twitter m-2 text-lg">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="youtube m-2 text-lg">
          <FontAwesomeIcon icon={faYoutube} />
        </div>

        <div className="login m-1 text-lg">
          <Button
            size="medium"
            sx={{ color: "black", border: "1px solid black" }}
          >
            Login <FontAwesomeIcon icon={faUser} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
