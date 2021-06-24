import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

const StudentFormPage = () => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		repeat: ""
	});

	const [error, setError] = useState({
		fullname: "error-invisible",
		email: "error-invisible",
		password: "error-invisible"
	});
	const validateEmail = email => {
		const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return res.test(String(email).toLowerCase());
	};

	// const validation = {
	// 	fullname: fullname.length > 0 ? "errorInvisible" : "errorVisible",
	// 	email: validateEmail(email) ? "errorInvisible" : "errorVisible",
	// 	password: password.length > 5 ? "errorInvisible" : "errorVisible"
	//  repeat : repeat === password ? "errorInvisible" : "errorVisible"
	// };

	console.log(formData);
	return (
		<>
			<h1> Detalles de tu cuenta </h1>
			<form>
				<input
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				<span>Podras ocultarlo en tus reviews</span>
				<input
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<span>Podras ocultarlo en tus reviews</span>
				<input
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>
				<input
					type="radio"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>
				<input
					type="radio"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>
			</form>
		</>
	);
};

export default StudentFormPage;
