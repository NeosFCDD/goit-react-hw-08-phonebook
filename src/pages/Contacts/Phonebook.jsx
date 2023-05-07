import React from "react";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";
import css from "pages/Contacts/Phonebook.module.css";

export default function Phonebook() {
  return (
    <div className={css.phonebook}>
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}