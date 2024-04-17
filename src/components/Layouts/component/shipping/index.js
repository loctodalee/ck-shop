import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Button, TextField } from "@mui/material";

function Shipping() {
  return (
    <div className="grid justify-items-center grid-cols-9 px-16 py-12 bg-white">
      <div className="flex items-center h-full col-span-4 ">
        <div className="mr-8">
          <FontAwesomeIcon
            icon={faCartFlatbed}
            className="mb-4 text-[1.5em] text-[#DDD1C1]"
          />
          <h2 className="mb-4 uppercase tracking-[2px] text-[0.875rem] leading-[1.25em] font-bold">
            60 DAYS RETURN
          </h2>
          <p className="text-[#312e39] leading-[1.65em] text-[13px] font-semibold">
            Ultrices dolor massa dui curabitur.
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTruck}
            className="mb-4 text-[1.5em] text-[#DDD1C1]"
          />
          <h2 className="mb-4 uppercase tracking-[2px] text-[0.875rem] leading-[1.25em] font-bold">
            FREE SHIPPING
          </h2>
          <p className="text-[#312e39] leading-[1.65em] text-[13px] font-semibold">
            Ultrices dolor massa dui curabitur.
          </p>
        </div>
      </div>
      <div className="h-full ">
        <div className="line mt-5 w-[1px] h-[15vh] bg-[#E7DDD7] col-span-1"></div>
      </div>
      <div className="justify-self-start col-span-4 ">
        <h1 className="leading-[1.2em] text-[#26222f] text-[1.25rem] font-semibold tracking-wide">
          Newsletter Sign Up
        </h1>
        <div className="flex">
          <div>
            <TextField
              id="outlined-basic"
              label="Your Email Please"
              variant="outlined"
            />
          </div>
          <div className="ml-8">
            <Button
              sx={{
                border: "1px solid black",
                color: "black",
                fontWeight: "500",
                fontSize: "0.875rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: "0",
                padding: "1em 1.5em",
              }}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
