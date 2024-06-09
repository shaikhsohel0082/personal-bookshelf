import React, { useEffect, useState } from "react";
import { stateData } from "../../redux/collectionReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/collectionReducer";
import { addBook } from "../../redux/collectionReducer";
import Styles from "./home.module.css";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [bookname, setBookname] = useState("");
  const dispatch = useDispatch();
  const Data = useSelector(stateData);
  console.log(Data);
  useEffect(() => {
    setBooks(Data.books[0]);
    console.log(books);
  }, [Data]);
  // useEffect(() => {
  //   localStorage.setItem("myBooks", JSON.stringify(Data.myBooks));
  // });
  return (
    <>
      <div className={Styles.home}>
        <div>
          <input
            className={Styles.input}
            type="text"
            placeholder="Search book name"
            required
            onChange={(e) => setBookname(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(fetchBooks(bookname));
            }}
          >
            Search
          </button>
        </div>
        {Data.loading && <h1>Loading.....</h1>}
        <div className={Styles.container}>
          {books &&
            books.map((book, index) => (
              <>
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
                  <div>
                    <button
                      onClick={() => {
                        dispatch(addBook(book));
                      }}
                    >
                      Add to My BookShelf
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
