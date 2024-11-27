export interface Book {
    id: string;
    title: string;
    description: string;
    author: string;
    price: number;
    coverImage?: string; // Optional field for the cover image URL
  }
  
   // To Create New Book
export interface BookFormProps {
    onAddBook: (book: Book) => void;
  }
  

  interface BookListProps {
    books: Book[]; // Array of books to display
    onDeleteBook: (id: string) => void; // Function to delete a book
    onViewBookDetails?: (book: Book) => void; // Optional: View book details
    onEditBook?: (book: Book) => void; // Optional: Edit a book
  }
  
interface BookCardProps {
    book: Book; // Book data to display
    onDelete: (id: string) => void; // Function to delete the book
    onViewDetails?: (book: Book) => void; // Optional: Function to view more details
    onEdit?: (book: Book) => void; // Optional: Function to edit the book
  }