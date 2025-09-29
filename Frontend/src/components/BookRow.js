import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

function BookRow({ category, books }) {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ color: "white" }}>{category}</h2>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {books.map((book) => (
          <BookCard
            key={Libros.id} // usa el id de la BD
            title={Libros.title}
            author={Libros.author}
            cover={Libros.cover}
            onClick={() => navigate(`/libros/${Libros.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default BookRow;
