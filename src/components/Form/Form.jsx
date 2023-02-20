import { FormContainer,Forma,Input,Label } from './Form.styled'
import { useState } from 'react'
import { addNewContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';

export default function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const items = useSelector(addNewContacts);

    const inputAddedName = evt => {
        const { name, value } = evt.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const onSubmitForm = evt => {
        evt.preventDefault();
        //Передаем данные в Арр через пропс submitData
        const newContact = {name: name,number: number};
            if (items.length === 0) {
                dispatch(addContacts(newContact));
                resetForm();
        return;
        } else {
        const existingContacts = 
        items.findIndex(itemContacts =>
            newContact.name === itemContacts.name) !==-1;
            // Проверка если контакт уже есть
            // console.log("🚀  existingContacts", existingContacts);
        if(existingContacts){
        alert(`${newContact.name} is already in contacts.`)
        return;
        }
            dispatch(addContacts(newContact));
            resetForm();
        }
    };

    const resetForm = () => {
        setName('');setNumber('');
    };

    return (
        <FormContainer>
            <Forma onSubmit={onSubmitForm}>
                <Label>Name</Label>
                <Input
                    autoComplete="off"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="May contain only letters"
                    value={name}
                    onChange={inputAddedName}
                    required />
                <br />
                <Label>Number</Label>
                <Input
                    autoComplete="off"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="May contain only number"
                    value={number}
                    onChange={inputAddedName}
                    required />

                <br />
                <button type="submit">Add Contact</button>
            </Forma>
        </FormContainer>
    );
}
