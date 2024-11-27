import React from "react";
import BookCard from './BookCard';
import { BookListProps} from "../types";

const BookList: React.FC<BookListProps> = ({ books, onDeleteBook, onViewBookDetails }) => {
    if (books.length === 0) {
      return <p className="text-center text-gray-500">No books available. Please add some books!</p>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={onDeleteBook}
            onViewDetails={onViewBookDetails} // Pass the callback to the BookCard
          />
        ))}
      </div>
    );
  };
  
  export default BookList;
