import { Button } from "@mui/material";
import BlogComponents from "../components/BlogComponent";
import LatestBlogs from "~/api/latestBlog.api";

function Blog() {
  return (
    <div className="px-[8vw] pt-28 bg-[#F7F7F7] pb-20">
      <div className="flex justify-between mx-24 mb-14 ">
        <div>
          <p
            className="uppercase tracking-[3px] text-[14px]"
            style={{ fontFamily: "'Fahkwang',sans-serif" }}
          >
            LATEST FROM THE BLOG
          </p>
        </div>
        <div>
          <Button
            sx={{
              border: "1px solid black",
              color: "black",
              borderRadius: "0",
              fontSize: "12px",
              width: "10vw",
            }}
          >
            VIEW ALL
          </Button>
        </div>
      </div>
      <div className="flex ">
        {LatestBlogs.map((blog, index) => {
          return (
            <BlogComponents
              name={blog.blogName}
              desc={blog.blogDescription}
              img={blog.blogImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
