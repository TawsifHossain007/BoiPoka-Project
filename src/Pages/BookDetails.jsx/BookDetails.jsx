import React from "react";
import { useLoaderData, useParams } from "react-router";
import { AddtoStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId1 = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId1);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    AddtoStoredDB(id);

    MySwal.fire({
      title: "Book Added",
      text: "The Book Has Been Added In The Mark As Read Section",
      icon: "success",
    })
  };
  return (
    <div>
      <img className="w-48" src={image} alt="" />
      <p>{bookName}</p>

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark As Read
      </button>
      <button className="btn btn-info m-2">WishList</button>
    </div>
  );
};

export default BookDetails;
