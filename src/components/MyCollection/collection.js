import React, { useEffect, useState } from "react";

import Styles from "./collection.module.css";

export default function Collection() {
  const myBooks = JSON.parse(localStorage.getItem("mybooks"));
  return (
    <>
      <h1>Personal Collection</h1>
      <div className={Styles.container}>
        {myBooks.length === 0 ? (
          <div className={Styles.card}>No books in collection</div>
        ) : (
          myBooks.map((book, index) => (
            <div key={index} className={Styles.card}>
              <div>
                <b>Book Title:</b> {book.title}
              </div>
              <div>
                <b>Author:</b>
                {book.author_name.toString().length > 25
                  ? book.author_name.toString().slice(0, 25) + "..."
                  : book.author_name}
              </div>
              <div>
                <b>Edition Count:</b> {book.edition_count}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
