import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import blogImage2 from "./assets/blogImage2.png";
import data from "./Data";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardContent from "./components/CardContent";

const BLOG_CONTENT_DATA = {
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias, alias pariatur dolore obcaecati deserunt nam quibusdam voluptas dolores id, rem quo praesentium consectetur voluptates veniam similique sint ea vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aliquam animi ut, suscipit tempore perspiciatis minus expedita incidunt exercitationem excepturi alias maxime? Incidunt possimus alias aliquam quaerat nam doloremque soluta! Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab repellendus cupiditate placeat quam odit rem? Animi obcaecati debitis quam quos! Totam, pariatur? Pariatur esse corrupti fugiat, doloribus corporis laboriosam illum.`,
  blogImage2: blogImage2,
};

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleFilter = (newData) => {
    console.log({ newData });

    setFilteredData(newData);
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Header data={data} setData={handleFilter} />
        <Routes>
          <Route
            path="/"
            element={
              <BlogList
                data={filteredData}
                selectedBlog={selectedBlog}
                setSelectedBlog={setSelectedBlog}
              />
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <CardContent
                data={filteredData}
                blogContent={BLOG_CONTENT_DATA}
                selectedBlog={selectedBlog}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
