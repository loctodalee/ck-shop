import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Category() {
  return (
    <div className="bg-[#F7F7F7] px-[3em] w-[99vw] ">
      <div className="flex flex-row py-[7.5em] mx-[7em] ">
        <div className="category-left px-[100px]">
          {/* top */}
          <div className="top">
            <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-collection-img-3.jpg" />
            <div className="leading-[1.3em] text-[#26222f] text-[2rem] font-semibold pt-6">
              Tops
              <FontAwesomeIcon
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  paddingLeft: "0.7em",
                }}
                icon={faArrowRight}
              />
            </div>
          </div>
          {/** Bottoms */}
          <div className="bottoms mt-[6em]">
            <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-collection-img-01.jpg" />
            <div className="leading-[1.3em] text-[#26222f] text-[2rem] font-semibold pt-6">
              Bottoms
              <FontAwesomeIcon
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  paddingLeft: "0.7em",
                }}
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
        <div className="category-right px-[100px]">
          <div className="accessories">
            <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-collection-img-02.jpg" />
            <div className="leading-[1.3em] text-[#26222f] text-[2rem] font-semibold pt-6">
              Accessories
              <FontAwesomeIcon
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  paddingLeft: "0.7em",
                }}
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="dresses mt-[6em]">
            <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-collection-img-4.jpg" />
            <div className="leading-[1.3em] text-[#26222f] text-[2rem] font-semibold pt-6">
              Dresses
              <FontAwesomeIcon
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  paddingLeft: "0.7em",
                }}
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
