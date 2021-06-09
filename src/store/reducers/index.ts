import { combineReducers } from "redux";
import { AppType } from "../../types";
import userReducer from "./UserReducer";
import loadingReducer from "./LoadingReducer";
import emailReducer from "./EmailReducer";
<<<<<<< HEAD
import forgotReducer from "./ForgotTokenReducer";


=======

>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
const rootReducer = combineReducers<AppType>({
  userSession: userReducer,
  loading: loadingReducer,
  emailError: emailReducer,
<<<<<<< HEAD
  forgotToken:forgotReducer
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
});

export default rootReducer;
