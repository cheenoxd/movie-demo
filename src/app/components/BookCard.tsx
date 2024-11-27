"use client"
import React from "react";
import { useState } from "react";
import { Book, BookCardProps} from "../types";

const BookCard: React.FC<BookCardProps> = ({ book, onDelete, onViewDetails }) => {
    return (
      <div
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 cursor-pointer hover:shadow-lg"
        onClick={() => onViewDetails?.(book)} // Trigger the callback if provided
      >
        {/* Cover Image */}
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-40 h-40 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-md">
            <p className="text-gray-5000">No Cover Available</p>
          </div>
        )}
  
        {/* Book Details */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-sm text-gray-600">By {book.author}</p>
          <p className="text-sm text-gray-800">{book.description}</p>
          <p className="text-sm font-semibold text-gray-700">${book.price.toFixed(2)}</p>
        </div>
  
        {/* Delete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from triggering onViewDetails
            onDelete(book.id);
          }}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default BookCard;