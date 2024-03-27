const ContactList = ({ contactList }) => {
  return (
    <>
      <ul>
        {
          contactList.map((contact) => {
            return <p key={contact.id}>Name: {contact.name}</p>
          })
        }
      </ul>

      <ul>
        {
          contactList.map((contact) => {
            return <p key={contact.id}>Email: {contact.email}</p>
          })
        }
      </ul>

      <ul>
        {
          contactList.map((contact) => {
            return <p key={contact.id}>Phone: {contact.phone}</p>
          })
        }
      </ul>
    </>


  )
}

export default ContactList