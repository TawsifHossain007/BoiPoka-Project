import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort,setSort] = useState('')
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type)
    if(type === 'Pages')
    {
        const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages)
        setReadList(sortedByPage)
    }
    if(type === 'Rating')
    {
        const sortedByRating = [...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedByRating)
    }
  }

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By: {sort?sort:""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={()=>handleSort("Pages")}>
            <a>Pages</a>
          </li>
          <li onClick={()=>handleSort("Rating")}>
            <a>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read: {readList.length}</h2>
          {readList.map((b) => (
            <Book singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
