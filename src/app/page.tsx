"use client"
import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './globals.css';


interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage?: string;
}

const Page: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  // Load books from localStorage on component mount
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Save books to localStorage whenever the books state changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const clearBooks = () => {
    setBooks([]);
    localStorage.removeItem('books'); // Clear localStorage
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Management System</h1>
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDeleteBook={deleteBook} />
      <button
      onClick={clearBooks}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mt-4"
      >
  Clear All Books
</button>
    </div>
  );
};

export default Page;
