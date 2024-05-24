import { useContext, useEffect, useState } from "react";
import { NavigationBarContext } from "../components/navigationbar/NavigationBarContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

function Contacto() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(false);
  }, []);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [nombreIsValid, setNombreIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [webIsValid, setWebIsValid] = useState(false);
  const [telefonoIsValid, setTelefonoIsValid] = useState(false);
  const [mensajeIsValid, setMensajeIsValid] = useState(false);

  const nombreChanged = (event) => {
    setNombre(event.target.value);
    nombre == "" ? setNombreIsValid(true) : setNombreIsValid(false);
  };
  const emailChanged = (event) => {
    setEmail(event.target.value);
    email == "" ? setEmailIsValid(true) : setEmailIsValid(false);
  };
  const telefonoChanged = (event) => {
    setTelefono(event.target.value);
    telefono == "" ? setTelefonoIsValid(true) : setTelefonoIsValid(false);
  };
  const webChanged = (event) => {
    setWeb(event.target.value);
    web == "" ? setWebIsValid(true) : setWebIsValid(false);
  };
  const mensajeChanged = (event) => {
    setMensaje(event.target.value);
    mensaje == "" ? setMensajeIsValid(true) : setMensajeIsValid(false);
  };

  const submit = () => {
    let validationError = false;
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const validPhone = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );

    nombre == "" ? setNombreIsValid(true) : setNombreIsValid(false);
    email == "" ? setEmailIsValid(true) : setEmailIsValid(false);
    telefono == "" ? setTelefonoIsValid(true) : setTelefonoIsValid(false);
    web == "" ? setWebIsValid(true) : setWebIsValid(false);
    mensaje == "" ? setMensajeIsValid(true) : setMensajeIsValid(false);

    if (
      nombre == "" ||
      email == "" ||
      telefono == "" ||
      web == "" ||
      mensaje == ""
    ) {
      validationError = true;
    }
    if (!validEmail.test(email)) {
      setEmailIsValid(false);
      validationError = true;
    }
    if (!validPhone.test(telefono)) {
      setTelefonoIsValid(false);
      validationError = true;
    }

    // call to backend
    fetch("http://localhost:3000/ajax/SendMail.php", {
      method: "POST",
      body: {
        nombre,
        email,
        telefono,
        mensaje,
        url: web,
        c_enviar: "Enviar mensaje",
      },
    });
  };

  return (
    <div>
      <Box className="flex m-8 justify-center flex-col">
        <TextField
          label="Nombre"
          required
          style={{ marginBottom: "20px" }}
          className="w-3/4 self-center"
          error={nombreIsValid}
          value={nombre}
          onChange={nombreChanged}
        />
        <TextField
          label="Email"
          required
          style={{ marginBottom: "20px" }}
          className="w-3/4 self-center"
          error={emailIsValid}
          value={email}
          onChange={emailChanged}
        />
        <TextField
          label="Tu web"
          style={{ marginBottom: "20px" }}
          className="w-3/4 mb-5 self-center"
          error={webIsValid}
          value={web}
          onChange={webChanged}
        />
        <TextField
          label="Tu telefono"
          style={{ marginBottom: "20px" }}
          className="w-3/4 mb-5 self-center"
          error={telefonoIsValid}
          value={telefono}
          onChange={telefonoChanged}
        />
        <TextField
          label="Escribe aqui tu mensaje"
          required
          multiline
          rows={10}
          className="w-3/4 mb-5 self-center"
          error={mensajeIsValid}
          value={mensaje}
          onChange={mensajeChanged}
        />
        <div className="w-3/4 self-center text-xs">
          <Checkbox
            checked={checked1}
            onChange={(event) => {
              setChecked1(!checked1);
            }}
            size="small"
            required
          />
          He leído y acepto la Política de Privacidad
        </div>
        <div className="w-3/4 mb-5 self-center text-xs">
          <Checkbox
            checked={checked2}
            onChange={(event) => {
              setChecked2(!checked2);
            }}
            size="small"
            required
          />
          Acepto que mis datos personales sean empleados para el envío de
          comunicaciones comerciales de ALBERTO MILLA, S.L. por medios
          electrónicos
        </div>
        <Button variant="outlined" className="mb-5 self-center h-12 w-3/4">
          Enviar
        </Button>
      </Box>
    </div>
  );
}

export default Contacto;
