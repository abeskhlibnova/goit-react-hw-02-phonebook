import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import {
    InputWrapper,
    Input,
    LabelTitle,
    AddContactButton,
} from './Phonebook.styled';
import styled from 'styled-components';
// import * as Yup from 'yup';

const ErrorText = styled.p`
    font-size: 14px;
    color: red;
`;

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

// const schema = Yup.object().shape({
//     name: Yup.string().min(3, 'to shop').required(),
//     number: Yup.number().min(7, 'to short').required(),
// });

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        const { name, number } = this.state;
        this.props.onSubmit({ name, number });
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { nameId, numberId, handleSubmit, handleChange } = this;

        return (
            <Formik
                initialValues={this.state}
                // validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <InputWrapper>
                        <LabelTitle htmlFor={nameId}>Name</LabelTitle>
                        <Input
                            id={nameId}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={handleChange}
                        />
                        <FormError name="name" />
                    </InputWrapper>
                    <InputWrapper>
                        <LabelTitle htmlFor={numberId}>Number</LabelTitle>
                        <Input
                            id={numberId}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={handleChange}
                        />
                        <FormError name="number" />
                    </InputWrapper>
                    <AddContactButton type="submit">
                        Add contact
                    </AddContactButton>
                </Form>
            </Formik>
        );
    }
}
