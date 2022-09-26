import Phonebook from './Phonebook';
import { PhonebookBox } from './Phonebook.styled';

export const App = () => {
    return (
        <PhonebookBox>
            <Phonebook />
        </PhonebookBox>
    );
};
