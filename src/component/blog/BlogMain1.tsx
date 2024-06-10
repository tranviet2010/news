import { useTalimContext } from "../../context/TalimContext";

import AllBlogSection from "./AllBlogSection";
import AllBlogPagination from "./AllBlogPagination";

const BlogMain1 = () => {
  const { totalBlogPages } = useTalimContext();
  return (
    <>
      <AllBlogSection />
      <AllBlogPagination totalPage={totalBlogPages} />
    </>
  );
};

export default BlogMain1;
