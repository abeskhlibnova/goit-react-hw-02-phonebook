import { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
    state = {
        contacts: [],
    };

    //   nameId = nanoid();
    //   numberId = nanoid();
    addPhoneNumber = data => {
        this.setstate({
            contacts: [data],
        });
    };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
            </div>
        );
    }
}

// <form onSubmit={handleSubmit}>
//   <div>
//     <label htmlFor={nameId}>Name</label>
//     <input
//       id={nameId}
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       value={this.state.name}
//       onChange={this.handleChange}
//     />
//   </div>
//   <div>
//     <label htmlFor={numberId}>Number</label>
//     <input
//       id={numberId}
//       type="tel"
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//       value={this.state.number}
//       onChange={this.handleChange}
//     />
//   </div>
//   <button type="submit">Add contact</button>
// </form>;
