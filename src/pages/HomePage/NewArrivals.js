import { Button } from "@mui/material";

function NewArrivals() {
  return (
    <div className=" flex flex-row justify-around h-[105vh] relative overflow-hidden">
      <div className="w-full pt-[9em] flex pl-24">
        <div className="max-w-[100%] z-[1] absolute">
          <img
            className="inline-block h-[85vh] min-w-[100%]"
            sizes="(max-width: 800px) 100vw, 800px"
            src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-new-arrivals-img.jpg"
          />
        </div>
      </div>
      <div className="w-full pr-24 bg-[#F7F7F7] flex flex-col justify-between relative">
        <h2 className="text-[8em] font-semibold text-[#26222f] leading-[0.9em] absolute z-10">
          New <br /> Arrivals
        </h2>
        <div className="line-divider w-full h-4 absolute top-[50%] left-[9rem] z-10">
          <span className="w-16 h-[2px] bg-black block"></span>
        </div>
        <div className="pl-[5em] absolute bottom-0 left-40 z-10">
          <p className="leading-[1.2em] text-[2rem] font-bold pb-4">
            Luce elegance long
            <br /> sleeve dress
            <br /> collection
          </p>
          <Button
            sx={{
              border: "1px solid black",
              color: "black",
              borderRadius: "0",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              padding: "10px 24px",
            }}
          >
            SHOP THE COLLECTION
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
