import { configureStore } from "@reduxjs/toolkit";
import { collectionReducer } from "../../redux/collectionReducer";

const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
});
export default store;
