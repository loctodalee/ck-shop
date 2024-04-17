function NewArrivalsBanner() {
  return (
    <div className=" pt-24 w-[99vw] flex justify-center bg-[#F7F7F7] text-[white]">
      <div className=" h-[80vh] w-[95%] bg-cover bg-[url('https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-new-arrival-header-img.jpg')]">
        <div className="overlay h-[80vh] w-full bg-gray-600 bg-opacity-50">
          <div className="h-full flex justify-center">
            <div className="w-[50%] h-full flex justify-end pl-[8%]">
              <h2 className="leading-[1.4em] text-[8.5rem] flex font-semibold items-center  h-full">
                New Arrivals
              </h2>
            </div>
            <div className="w-[50%] relative ">
              <div className="">
                <p className="absolute top-[50%] mr-[50%] pt-16 text-[22px] font-semibold border-t-2 border-[white]">
                  In congue venenatis bibendum viverra sit augue elit sed
                  viverra fames blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalsBanner;
