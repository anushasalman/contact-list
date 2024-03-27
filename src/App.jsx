import {useEffect, useState} from "react";
import ContactList from "./MyTenContacts";
import './App.css';

const App = () => {
  const [contactList, setContactList] = useState([]);
  const API_USERS_URL ='https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const getContactList = async() => {
      const response = await fetch(API_USERS_URL);
      const json = await response.json();
      setContactList(json)

    }

    getContactList();
  }, [])


  return (
    <>
    <section>Contact List</section>
      
      <ContactList contactList={contactList} email= {contactList} phone={contactList.phone} />
      </>
  )
}

export default App