import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect } from "react";

// Utility function to slugify the subtitle
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

function BlogList({ data, setSelectedBlog }) {
  const handleCardClick = (blog) => {
    setSelectedBlog(blog); // Set the selected blog
  };

  return (
    <div className="flex flex-wrap gap-4 mt-24 sm:flex-col sm:items-center md:flex-row">
      {data.map((item, index) => (
        <Link
          key={index}
          to={`/blog/${slugify(item?.subtitle)}`} // Use slugified subtitle for the URL
          onClick={() => handleCardClick(index)} // Set the clicked blog as the selected one}
        >
          <Card data={item} index={index} />
        </Link>
      ))}
      <div className="w-full flex justify-center">
        <button className="border-2 p-3 rounded-md text-gray-700 font-bold">
          Load More
        </button>
      </div>
    </div>
  );
}

export default BlogList;
