import {
  faFacebook,
  faInstagram,
  faTwitter,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcApplePay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <div className="foolter-container bg-[#26222F] py-20 px-32 text-[#d9d9d9] border-b-2 border-[#393347] ">
        <div className="flex justify-between">
          <div className="logo w-[25%]">
            <img
              className="mb-[14px]"
              src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/site-logo-white.svg"
            />
            <p className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
              Pulvinar aenean dignissim porttitor sed risus urna, pretium quis
              non id.
            </p>
            <div className="sub-logo mt-4">
              <FontAwesomeIcon className="mr-4" icon={faInstagram} />
              <FontAwesomeIcon className="mr-4" icon={faFacebook} />
              <FontAwesomeIcon className="mr-4" icon={faTwitter} />
            </div>
          </div>
          <div className="infomation">
            <h2 className="text-[white] text-[1.4rem] font-medium leading-[1.5rem] mb-[14px]">
              Information
            </h2>
            <ul>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                About me
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                My story
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Awards & achievement
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Contact
              </li>
            </ul>
          </div>
          <div className="Discover">
            <h2 className="text-[white] text-[1.4rem] font-medium leading-[1.5rem] mb-[14px]">
              Discover
            </h2>
            <ul>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Dresses
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Bottoms
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Footwear
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                Accessories
              </li>
            </ul>
          </div>
          <div className="LocateUs">
            <h2 className="text-[white] text-[1.4rem] font-medium leading-[1.5rem] mb-[14px]">
              Locate Us
            </h2>
            <ul>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                123 Demo Blvd, Miami, FL 4567,
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                United States
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                +1 123-456-7890
              </li>
              <li className="text-[14px] font-normal leading-[1.65em] tracking-[0.5px]">
                mail@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#26222F] text-[#d9d9d9] py-16 px-32 flex justify-between">
        <p>© 2024 Fashion Designer. Powered by Fashion Designer</p>
        <div className="payment">
          <FontAwesomeIcon className="ml-2 text-[1.5em]" icon={faCcVisa} />
          <FontAwesomeIcon
            className="ml-2 text-[1.5em]"
            icon={faCcMastercard}
          />
          <FontAwesomeIcon className="ml-2 text-[1.5em]" icon={faCcDiscover} />
          <FontAwesomeIcon className="ml-2 text-[1.5em]" icon={faCcApplePay} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
