import React from "react";
import { CiStar } from "react-icons/ci";

const Book = ({ singleBook }) => {
  const { bookName, author, image, category, rating } = singleBook;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="bg-gray-100 rounded-lg w-2/3 mx-auto p-4">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[22px] mt-4">{bookName}</h2>
          <p className="font-medium text-[16px] text-[#131313cc]">
            By: {author}
          </p>
          <div className="flex items-center justify-center gap-36 mt-4">
            <p className="font-medium text-[16px] text-[#131313cc]">
              {category}
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="font-medium text-[16px] text-[#131313cc]">
                {rating}
              </p>
              <CiStar></CiStar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
