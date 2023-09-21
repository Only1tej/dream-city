// import React, { useState } from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import { CssBaseline } from '@mui/material';

// const FormListing = () => {
//     const [formData, setFormData] = useState({
//         step: 1,
//         name: '',
//         address: '',
//         description: '',
//         location: '',
//         photos: {},
//     });
//     const { step } = formData;
//     const { name, address, description, location, photos } = formData;
//     const values = { name, address, description, location, photos };

//     // Proceed to the next step
//     const nextStep = (e) => {
//         e.preventDefault();
//         setFormData((prevState) => ({
//             ...prevState,
//             step: prevState.step + 1,
//         }));
//     };


//     // const continueHandler = (e) => {
//     //     e.preventDefault();
//     //     nextStep();
//     // };

//     // Handle fields change
//     const handleChange = (input) => (e) => {
//         setFormData((prevState) => ({ ...prevState, [input]: e.target.value }));
//     };

//     const styles = {
//         button: {
//             margin: 15,
//         },
//     };

//     const theme = {};

//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <AppBar position='static' title="Enter User Details" />

//             <TextField
//                 label="Name"
//                 variant="outlined"
//                 onChange={handleChange('name')}
//                 defaultValue={values.name}
//                 fullWidth
//                 margin="normal"
//             />
//             <br />

//             <TextField
//                 label="Address"
//                 variant="outlined"
//                 onChange={handleChange('address')}
//                 defaultValue={values.address}
//                 fullWidth
//                 margin="normal"
//             />
//             <br />
//             <TextField
//                 label="Description"
//                 variant="outlined"
//                 onChange={handleChange('description')}
//                 defaultValue={values.description}
//                 fullWidth
//                 margin="normal"
//             />
//             <br />
//             <TextField
//                 label="Location"
//                 variant="outlined"
//                 onChange={handleChange('location')}
//                 defaultValue={values.location}
//                 fullWidth
//                 margin="normal"
//             />
//             <br />
//             <Button
//                 variant="contained"
//                 color='primary'
//                 label="Continue"
//                 style={styles.button}
//                 onClick={nextStep}
//             >
//                 Continue
//             </Button>
//         </ThemeProvider >
//     );
// };



// export default FormListing;
