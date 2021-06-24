import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

const StudentFormPage = () => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		repeat: ""
	});

	const [checked, setChecked] = useState(true);

	const [error, setError] = useState({
		fullname: "error-invisible",
		email: "error-invisible",
		password: "error-invisible",
		repeat: "error-invisible"
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

				<input
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>Acepto los términso y condiciones</span>
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>

				<button className="" onClick="">
					Crear Cuenta
				</button>
				<button className="" onClick="">
					Registro con Google
				</button>
			</form>
		</>
	);
};

export default StudentFormPage;
