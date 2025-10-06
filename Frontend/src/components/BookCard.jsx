import React from "react";
import "../Styles/BookCard.css";

export default function BookCard({ title, author, cover, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>
      <img
        src={`http://localhost:5072${cover}`}
        alt={title}
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
}
