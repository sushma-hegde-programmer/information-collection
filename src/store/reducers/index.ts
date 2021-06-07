import { combineReducers } from "redux";
import { AppType } from "../../types";
import userReducer from "./UserReducer";
import loadingReducer from "./LoadingReducer";
import emailReducer from "./EmailReducer";

const rootReducer = combineReducers<AppType>({
  userSession: userReducer,
  loading: loadingReducer,
  emailError: emailReducer,
});

export default rootReducer;
