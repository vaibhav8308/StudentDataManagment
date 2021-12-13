import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
import "./Style.css"
const StudentList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/students/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper" >
	<Table striped bordered hover className="Table">
		<thead>
		<tr>
			<th>firstName</th>
			<th>lastName</th>
			<th>age</th>
			<th>fieldOfStudy</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody className="Table">{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default StudentList;
