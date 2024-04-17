function BlogComponents({ name, desc, img }) {
  return (
    <div className="w-[30vw]">
      <div>
        <img width={388} height={300} src={img} />
      </div>
      <div className="content ">
        <h2 className="pt-6 text-[1.5rem] leading-[1.2em] font-semibold text-[#26222f] min-h-[85px]">
          {name}
        </h2>
        <p className="text-[16px] font-normal text-[#312e39] leading-[1.65em] tracking-tight">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BlogComponents;
