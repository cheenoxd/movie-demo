export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-blue-500 text-white p-4">
          <h1>My Book App</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="text-center text-gray-500 p-4">
          &copy; {new Date().getFullYear()} My Book App
        </footer>
      </body>
    </html>
  );
}
