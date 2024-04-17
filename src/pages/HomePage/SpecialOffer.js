import { Button } from "@mui/material";

function SpecialOffer() {
  return (
    <div>
      <div className="relative w-[99vw] h-[60vh] bg-cover bg-[url('https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-cta-bg-img.jpg')]">
        <div className="overlay w-[99vw] h-[60vh] bg-gray-500 bg-opacity-30">
          <div className="absolute top-[30%] w-full flex flex-col items-center">
            <p className="text-[white] uppercase tracking-[2px] leading-[1.25em] text-[0.875rem] pt-4">
              SPECIAL OFFER
            </p>
            <h2 className="text-[white] leading-[1.3em] text-[3.5rem] pt-4">
              Up to 30% OFF
            </h2>
            <div className="pt-4">
              <Button
                sx={{
                  background: "white",
                  color: "black",
                  borderRadius: "0",
                  fontSize: "0.812rem",
                  padding: "10px 24px",
                  fontWeight: "600",
                }}
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
