import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("Rquired"),
	lastName: Yup.string()
	//.email("You have enter an invalid email address")
	.required("Rquired"),
	age: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Rquired"),
	fieldOfStudy: Yup.string().required("Rquired"),
});
console.log(props);
return (
	<div className="form-wrapper" >
	<Formik {...props} validationSchema={validationSchema} >
		<Form >
          <h3>Add Student Details</h3>
		<FormGroup>
			First Name
			<Field name="firstName" type="text"
				className="form-control" />
			<ErrorMessage
			name="firstName"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<br/>
		<FormGroup>
			Last Name
			<Field name="lastName" type="text"
				className="form-control" />
			<ErrorMessage
			name="lastName"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<br/>
		<FormGroup>
			Age
			<Field name="age" type="number"
				className="form-control" />
			<ErrorMessage
			name="age"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<br/>
		<FormGroup>
			
			Field Of Study
			
			<Field name="fieldOfStudy" type="text"
				className="form-control" />
			<ErrorMessage
			name="fieldOfStudy"
			className="d-block invalid-feedback"
			component="span"
			/>
		
		</FormGroup>
		<br/>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		
		</Form>
		
	</Formik>
	<br/>
	</div>
);
};

export default StudentForm;
