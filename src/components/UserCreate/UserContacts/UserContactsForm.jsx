import { Container } from "../../App.styled";
import Contacts from "components/Contacts";
import Filter from "components/Filter";
import Form from "components/Form";
import WrapperForPhonebook from "components/Wrapper/Wrapper";
import { STATUS } from "../../Status/costants.status";
import { addNewContacts, isLoadingContacts } from 'redux/Operation/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "components/Loader/Loader";
import { getContacts } from "redux/Operation/operations";
import { useEffect } from "react";

const UserContactsForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(addNewContacts);
  const isLoading = useSelector(isLoadingContacts);
  
    useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
    return (
            <Container>
        <WrapperForPhonebook>
        <Form/> 
          {isLoading === STATUS.loading ||
            isLoading === STATUS.idle ?
            <Loader /> : ""}
            {items.length === 0 ? '' :
              <>
            <Filter />
            <Contacts/>
              </> }
        </WrapperForPhonebook>
    </Container>
    )
}
export default UserContactsForm;