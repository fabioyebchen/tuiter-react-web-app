import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import WhoToFollowList from "./who-to-follow-list/";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HomeScreen from "./home-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import AuthContext from "./user/auth-context";
import ProtectedRoute
  from "./user/protected-route";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    user: authReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
        <AuthContext>
          <div>
            <div className="row">
              <div className="col-2">
                <NavigationSidebar />
              </div>
              <div className="col-7">
                <Routes>
                  <Route path="/home" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                  <Route path="/explore" element={<ProtectedRoute><ExploreScreen /></ProtectedRoute>} />
                  <Route path="/bookmarks" element={<ProtectedRoute><BookmarksScreen /></ProtectedRoute>} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                </Routes>
              </div>
              <div className="col-3">
                <WhoToFollowList />
              </div>
            </div>
          </div>
        </AuthContext>
    </Provider>
  );
}
export default Tuiter;
