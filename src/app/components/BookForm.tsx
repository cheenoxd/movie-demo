import React from "react";
import { useState } from "react";
import { Book, BookFormProps } from "../types";


const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Make Sure all Fields are filled out
    if (!title || !author || !description || !price) {
      alert('Please fill out all fields.');
      return;
    }

    const newBook: Book = {
      id: Math.random().toString(36).substring(2),
      title,
      author,
      description,
      price: parseFloat(price),
      coverImage: coverImage ? URL.createObjectURL(coverImage) : undefined,
    };

    onAddBook(newBook);

    // Reset the form
    setTitle('');
    setAuthor('');
    setDescription('');
    setPrice('');
    setCoverImage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="p-2 border rounded"
        required
      />
      <input type="file" accept="image/*" onChange={handleFileChange} className="p-2" />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
