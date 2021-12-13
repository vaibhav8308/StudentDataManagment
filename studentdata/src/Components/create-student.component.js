// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
//import StudentList from "./student-list.component";



// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ firstName: '', lastName: '', age: '', fieldOfStudy:"" })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:4000/students/create-student',
	studentObject)
	.then(res => {
		if (res.status === 200)
		alert('Student successfully Added')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	
	enableReinitialize>
	Submit
	</StudentForm>
	
	
	
	
)


}


// Export CreateStudent Component
export default CreateStudent
