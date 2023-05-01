import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "components/Navigation/Navigation.jsx";
import Home from "components/Home/Home.jsx";
import Phonebook from "pages/Contacts/Phonebook.jsx";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
import { fetchCurrentUser } from "./Redux/authOperations";

function App ( ){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Phonebook />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;