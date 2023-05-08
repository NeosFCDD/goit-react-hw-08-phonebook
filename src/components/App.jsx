import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "components/Navigation/Navigation.jsx";
import Home from "components/Home/Home.jsx";
import Phonebook from "pages/Contacts/Phonebook.jsx";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Loader from "./Form/Loader";
import NotFound from "pages/NotFound/NotFound";
import { fetchCurrentUser } from "./Redux/authOperations";
import { getIsRefreshing } from "components/Redux/selectors";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App ( ){
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return  isRefreshing ? (<Loader />) : (
      <div className="App">
          <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={
                  <PrivateRoute component={Phonebook} redirectTo="/login" />} />
                <Route path="login" element={
                  <PublicRoute component={Login} redirectTo="/contacts" />} />
                <Route path="register" element={
                  <PublicRoute component={Register} redirectTo="/contacts" />} />
                <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;