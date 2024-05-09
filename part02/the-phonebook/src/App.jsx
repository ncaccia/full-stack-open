import { useState, useEffect } from 'react'
import personService from './services/persons'

// Search filter component
const Filter = ({ filterInput, filter }) => {
  return (
    <div>
      <label htmlFor="filterByName">Filter by name: </label>
      <input id='filterByName' onChange={filterInput} value={filter} />
    </div>
  );
}

// Add Person component
const AddPerson = ({ states, functions }) => {
  const [addPerson, nameInput, phoneInput] = functions;
  const [newName, newPhone] = states;

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id='name' onChange={nameInput} value={newName} />
        </div>
        <div>
          <label htmlFor="phoneNum">Phone Number: </label>
          <input id='phoneNum' onChange={phoneInput} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}



// Show contacts in list component
const ContactList = ({ states, deletePerson }) => {
  const [persons, filter] = states;

  const filteredPersons = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(filter.toLowerCase()
    ));

  const RenderPerson = (person) => (
    <li key={person.id}>
      <p>{person.name} - phone: {person.phone}<button onClick={() => deletePerson(person.id, person.name)}>Delete</button></p>
    </li>
  );

  const RenderList = () => {
    if (filter.length === 0) {
      return persons.map(RenderPerson);
    } else if (filteredPersons.length > 0) {
      return filteredPersons.map(RenderPerson);
    } else {
      return <p>No matches were found</p>;
    }
  };

  return (
    <div>
      <h2>Contacts Numbers</h2>
      <ul>
        <RenderList />
      </ul>
    </div>
  );
}

const Notification = ({ notification }) => {
  const { type, message } = notification;
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (message === null) {
    return null
  }

  if (type === "success") {
    return (
      <div
        style={successStyle}
      >
        {message}
      </div>
    )
  } else {
    return (
      <div
        style={errorStyle}
      >
        {message}
      </div>
    )
  }
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState({ type: "success", message: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, []);

  const filterInput = (e) => {
    setFilter(e.target.value);
  }

  const nameInput = (e) => {
    setNewName(e.target.value);
  }

  const phoneInput = (e) => {
    setNewPhone(e.target.value);
  }

  const notificationMessage = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification({ type: null, message: null });
    }, 2000);
  }

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
    };
    const foundPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase());
    const isPhoneDuplicated = persons.some(p => p.phone === newPhone);

    if (isPhoneDuplicated) {
      alert(`${newPhone} is already added to the phonebook, try another phone combination or edit the contact please`);
      return;
    }

    if (foundPerson) {
      const shouldReplace = window.confirm(`${foundPerson.name} already exist in the phonebook. Shall we replace the old number with the new one?`)

      if (shouldReplace) {
        personService
          .update(foundPerson.id, { ...foundPerson, phone: newPerson.phone })
          .then(updatedPerson => {
            setPersons(prevPersons => prevPersons.map(p =>
              p.id === foundPerson.id ? { ...p, phone: updatedPerson.phone } : p
            ));
            setNewName('');
            setNewPhone('');
            console.log("running update notification....");
            notificationMessage("success", `${newPerson.name} successfully updated in the phonebook`)
          })
          .catch(err => {
            console.error("Error updating person:", err.message);
            console.log("running update error notification....");
            notificationMessage("error", `Alert!! ${foundPerson.name} has already been deleted from the phonebook`);
            setPersons(persons.filter(p => p.id !== foundPerson.id))
          });
      } else {
        return;
      }
    } else {
      personService
        .create(newPerson)
        .then(newPerson => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewPhone('');
          console.log("running update notification....");
          notificationMessage("success", `${newPerson.name} successfully added to the phonebook`)
        })
        .catch(() => {
          notificationMessage("error", `Alert!! ${foundPerson.name} has already been deleted from the phonebook`);
          setPersons(persons.filter(p => p.id !== foundPerson.id))
        });
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}`)) {
      personService
        .destroy(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          notificationMessage("success", `${name} successfully deleted from the phonebook`)
        })
        .catch(err =>
          notificationMessage("error", `Error deleting person. Error: ${err.message}`)
        )
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification} />
      <Filter
        filterInput={filterInput}
        filter={filter}
      />
      <AddPerson
        states={[newName, newPhone]}
        functions={[addPerson, nameInput, phoneInput]}
      />
      <ContactList
        states={[persons, filter]}
        deletePerson={deletePerson}

      />
    </div>
  )
}

export default App
