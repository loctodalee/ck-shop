import { Button } from "@mui/material";

function CollectionBanner() {
  return (
    <div className="w-[99vw] py-24 px-[10%] bg-[#F7F7F7]">
      <div>
        <div>
          <h2 className="text-[#26222f] leading-[1.4em] text-[8.5rem] font-semibold tracking-wider py-10">
            Collections
          </h2>
        </div>
        <div className="flex">
          <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-featured-collection-4.jpg" />
          <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-featured-collection-3.jpg" />
          <div className="flex flex-col">
            <img
              className="min-h-[50%]"
              src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-featured-collection-2.jpg"
            />
            <img
              className="min-h-[50%]"
              src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-featured-collection-1.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-[400px]">
          <h2 className="leading-[1.3em] text-[#26222f] text-[3.5rem] font-medium pr-20">
            Pre Fall 2024
          </h2>
        </div>
        <div>
          <div className="line w-20 h-[2px] mt-4 bg-black" />
          <div className="mt-16 mr-28">
            <p className="text-[1rem] font-normal leading-[1.65em]">
              Faucibus parturient dignissim nisi, magna ullamcorper facilisi
              tincidunt nulla et morbi sed in risus vestibulum consectetur arcu
              id eu pulvinar quis turpis luctus congue vitae ipsum egestas nunc,
              ornare massa commodo.
            </p>
          </div>
          <div>
            <Button
              sx={{
                marginTop: "1em",
                padding: "0.6em 1.5em",
                border: "1px solid black",
                borderRadius: "0",
                color: "black",
              }}
            >
              DISCOVER MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionBanner;
