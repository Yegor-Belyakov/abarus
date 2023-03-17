import React, { useEffect, useState } from "react";
import "./posts.css";
import PaginationPosts from "./pagination";
import SearchInput from "./searchInput";
import { IPosts, ISortBy } from "../models";
import _ from "lodash";

import TablePosts from "./table";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<IPosts[]>([]);
  const [sortBy, setSortBy] = useState<{ iter: string, order: 'asc' | 'desc' }>({ iter: "id", order: "asc" });


  const count = posts.length;
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate()

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
      navigate(`/${page}`)
  };

  const onSort = (sortItem: string) => {
    if (sortBy.iter === sortItem) {
     

      setSortBy((prev: ISortBy) => ({
        ...prev,
        order: prev.order === "asc" ? "desc" : "asc",
      }));
      setCurrentPage(1)
    } else {
      setSortBy({ iter: sortItem, order: "asc" });
      setCurrentPage(1)
    }
  };

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);


  useEffect(() => {
    let filtered = posts;
    if (searchValue) {
      const s = searchValue.toLocaleLowerCase();
      
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(s) ||
          post.body.toLowerCase().includes(s)
          
      );
      
    }
    setFilteredPosts(filtered);
    
  }, [searchValue, posts, currentPage]);

  const paginate = (posts: IPosts[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    return [...posts].splice(startIndex, pageSize);
  };
  const sortedPosts = _.orderBy(filteredPosts, [sortBy.iter], [sortBy.order]);

  const postsCrop = paginate(sortedPosts, currentPage, pageSize);


  return (
    <div className="wrapper">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <TablePosts filteredPosts={postsCrop} onSort={onSort}  sortBy={sortBy}/>
      <PaginationPosts
        itemsCount={count}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Posts;
