import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
};

export const fetchBooks = createAsyncThunk(
  "collection/fetchBooks",
  async (bookname) => {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${bookname}&limit=10&page=1`
    );
    return response.data;
  }
);

const collectionSlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      const bookToAdd = action.payload;
      const bookIndex = state.books[0].findIndex(
        (book) => book.cover_edition_key === bookToAdd.cover_edition_key
      );

      if (bookIndex !== -1) {
        let myBooks = JSON.parse(localStorage.getItem("mybooks")) || [];
        const myBookIndex = myBooks.findIndex(
          (book) => book.cover_edition_key === bookToAdd.cover_edition_key
        );

        if (myBookIndex === -1) {
          myBooks.push(state.books[0][bookIndex]);
          localStorage.setItem("mybooks", JSON.stringify(myBooks));
          console.log(JSON.parse(localStorage.getItem("mybooks")));
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = [action.payload.docs]; // Directly setting books to simplify
    });
  },
});

export const collectionReducer = collectionSlice.reducer;
export const { addBook } = collectionSlice.actions;
export const stateData = (state) => state.collection;
