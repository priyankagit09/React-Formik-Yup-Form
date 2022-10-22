import logo from './logo.svg';
import './App.css';

import {useFormik} from "formik";

import * as Yup from "yup";


function App() {
 const validations = Yup.object({
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required')
       .min(6, "Password should be 6 characters")
       .max(10,"password should be 10 characters")
 })


 const formik = useFormik({
  initialValues: {
    name: "",
    password: ""
  },
  onSubmit: (values) => {
  
 console.log(values)

  formik.resetForm()
   
  },
  validationSchema: validations

  
 })



  return (
    
    




    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <label>Name</label> <br/>
      <input type="text" placeholder="Enter the name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
     {formik.errors.name? <div className="errors">{formik.errors.name}</div>: null}
     <br/>
       
      <label>Password</label> <br/>
      <input type="password" placeholder="Enter the password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
      {formik.errors.password? <div className="errors">{formik.errors.password}</div>: null}
      <br/>
      
     
    <br/>
    <button type="submit">Register</button>

    </form>


);
}

export default App;
