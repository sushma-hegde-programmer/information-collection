import { combineReducers } from "redux";
import loadingReducer from "./LoadingReducer";
import { StoreType } from "../../types";

const rootReducer = combineReducers<StoreType>({
  loading: loadingReducer,
});

export default rootReducer;
