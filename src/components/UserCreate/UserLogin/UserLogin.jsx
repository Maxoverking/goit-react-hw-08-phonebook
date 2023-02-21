import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/AuthOperation/authOperation';
import { DIV,WRAP,SPAN,Button } from '../UserRegister/UserRegister.styled';
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

const UserLogin = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(logInUser(values))
    },
  });
  return (
    <WRAP>
      <DIV>
        <form onSubmit={formik.handleSubmit}>
          <SPAN>Log in</SPAN>
          <TextField
            fullWidth
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

};
export default  UserLogin;



// const UserLogin = () => {
//   const dispatch = useDispatch()
//   // const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const loginForm = evt => {
//     const { name, value } = evt.target;
//     switch (name) {
//         case 'email':
//             setEmail(value);
//             break;
//         case 'password':
//             setPassword(value);
//             break;
    
//         default:
//             break;
//     }
//   };
//     const onSubmitForm = (evt) => {
//       evt.preventDefault();
//       dispatch(logInUser({ email: email, password: password }))
//     // console.log({ email: email, password: password })
//     // setLoading(true);
//     resetForm();
//     };

//     const resetForm = () => {
//         setEmail('');setPassword('');
//     };
  
//     return (<>
//     <WRAP>
//       <DIV>
//         <FORM >
//           <SPAN>Login form</SPAN> 
//             <TextField
//             helperText="Please enter your login"
//             id="demo-helper-text-misaligneds"
//             label="Login :"
//             autoComplete='off'
//             margin="dense"
//             name="email"
//               value={email}
//               onChange={loginForm}
//             />
//             <TextField
//             id="outlined-password-input"
//             label="Password :"
//             helperText="Please enter your password"
//             type="password"
//             autoComplete='off'
//             margin="dense"
//             name="password"
//               value={password}
//               onChange={loginForm}
//             />
//             <SPAN><LoadingButton
//             sx={{ width: 100 }} 
//             onClick={onSubmitForm}
//             // loading={loading}
//             // loadingIndicator="Loading…"
//               variant="outlined">
//             <span>Log in</span>
//             </LoadingButton></SPAN>  
//           </FORM>
//         </DIV>
//       </WRAP></>
//     )
// }

