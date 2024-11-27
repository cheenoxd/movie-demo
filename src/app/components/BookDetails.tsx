import React from "react";
import { Book } from "../types";

const BookDetails: React.FC<{ book: Book; onClose: () => void }> = ({ book, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
          <p className="mb-4">{book.description}</p>
          <p className="text-lg font-bold mb-4">${book.price.toFixed(2)}</p>
          {book.coverImage && <img src={book.coverImage} alt={book.title} className="w-full h-40 object-cover rounded-md mb-4" />}
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default BookDetails;