import { LI, H2, UL } from "./Contacts.styled"
import { deleteContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { addNewContacts, getFilteredContacts } from "redux/selectors";
//Coздаем функцию фильтрации за компонентом
//исключаем рендер
  const filterContacts = (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact=>
       contact.name.toLowerCase().includes(normalizedFilter))
  }

export default function Contacts() {
    const items = useSelector(addNewContacts);
    const filter = useSelector(getFilteredContacts);
    const filteredItems = filterContacts(items, filter);

    const dispatch = useDispatch();
        const deleteContact = uniqueId => {
    // console.log("🚀  uniqueId", uniqueId);
        dispatch(deleteContacts(uniqueId));
    }
    return (
        <>
            <H2>Contacts</H2>
            <UL>
            {filteredItems.map(({id,name,number}) => (
                <LI key={id}>{name} : {number}
                    <div>
                        <button 
                            type="button"
                            onClick={() => {deleteContact(id) }}
                            //передача id в метод для удаления обьекта
                        >DELETE</button> 
                    </div>
                </LI>    
            ))}
            </UL>
        </>
    )
}
