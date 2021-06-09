import { combineReducers } from "redux";
import { AppType } from "../../types";
import userReducer from "./UserReducer";
import loadingReducer from "./LoadingReducer";
import emailReducer from "./EmailReducer";
import forgotReducer from "./ForgotTokenReducer";


const rootReducer = combineReducers<AppType>({
  userSession: userReducer,
  loading: loadingReducer,
  emailError: emailReducer,
  forgotToken:forgotReducer
});

export default rootReducer;
