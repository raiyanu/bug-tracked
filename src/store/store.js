import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import logger from "./middleware/logger";
import preFuncActions from "./middleware/preFuncActions";
import reducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // logger("console"), preFuncActions,
      api
    ),
});

export default store;
