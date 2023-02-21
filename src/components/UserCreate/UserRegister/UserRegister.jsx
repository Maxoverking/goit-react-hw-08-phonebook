import { registredUser } from 'redux/AuthOperation/authOperation';
import { DIV,WRAP,SPAN,Button } from './UserRegister.styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const UserRegister = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
        name:'',
        email: '',
        password: '',
    },
    validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log("🚀  values", values);
        dispatch(registredUser(values))
    },
  });
    return (
    <WRAP>
    <DIV>
        <form onSubmit={formik.handleSubmit}>
            <SPAN>Registration form</SPAN> 
            <TextField
                fullWidth
                // helperText="Please enter your name"
                id="name"
                label="Name"
                name="name"
                value={formik.values.name}
                autoComplete='off'
                margin="dense"
                onChange={formik.handleChange} />
            <TextField
                fullWidth
                    //   helperText="Please enter your email"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                margin="dense" 
                        />
            <TextField
                fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    //   helperText="Please enter your password"
                    margin="dense"
                        />
            <SPAN>
                <Button type="submit">Submit</Button>
            </SPAN>
        </form>
    </DIV>
    </WRAP>
  );
}
export default UserRegister;

// const UserRegister = () => {
//     const dispatch = useDispatch()
//     const [loading, setLoading] = useState(true);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const inputAddedName = evt => {
//         const { name, value } = evt.target;
//         switch (name) {
//             case 'name':
//                 setName(value);
//                 break;
//             case 'email':
//                 setEmail(value);
//                 break;
//             case 'password':
//                 setLoading(false);
//                 setPassword(value);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const onSubmitForm = (evt) => {
//         evt.preventDefault();
//         dispatch(registredUser({ name: name, email: email, password: password }))
//         setLoading(true);
//         // console.log({ name: name, email: email, password: password });
//         // resetForm();
//     };

//     // const resetForm = () => {
//     //     setEmail('');setName('');setPassword('');
//     // };
//     return (
//         <WRAP>
//             <DIV>
//                 <FORM >
//                 <SPAN>Registration form</SPAN> 
//                 <TextField
//                 helperText="Please enter your name"
//                 id="demo-helper-text-misaligned"
//                 label="Name"
//                 name="name"
//                 value={name}
//                 autoComplete='off'
//                 margin="dense"
//                 onChange={inputAddedName}
//             />
//             <TextField
//             helperText="Please enter your email"
//             id="demo-helper-text-misaligneds"
//             label="Email"
//             name="email"
//                         value={email}
//                         title="May contain only letters"
//             autoComplete='off'
//             margin="dense"
//             onChange={inputAddedName}
//                 />
//             <TextField
//             id="outlined-password-input"
//             label="Password"
//             helperText="Please enter your password"
//             type="password"
//             name="password"
//             value={password}
//             autoComplete='off'
//             margin="dense"
//             onChange={inputAddedName}
//                     />
//         <SPAN>
//             <LoadingButton 
//             sx={{ width: 100 }} 
//             onClick={onSubmitForm} 
//             disabled={loading}
//             loadingIndicator="Loading…"
//             variant="outlined"
//         >
//         <span>Submit</span>
//         </LoadingButton></SPAN>  
//             </FORM>
//         </DIV>
//     </WRAP>
//     )
// }


