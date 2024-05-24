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

  const [nombreIsInvalid, setNombreIsInvalid] = useState(true);
  const [emailIsInvalid, setEmailIsInvalid] = useState(true);
  const [telephoneIsInvalid, setTelephoneIsInvalid] = useState(false);
  const [mensajeIsInvalid, setMensajeIsInvalid] = useState(true);

  const checkbox1Changed = (event) => {
    setChecked1(event.target.checked);
  };
  const checkbox2Changed = (event) => {
    setChecked2(event.target.checked);
  };

  const nombreChanged = (event) => {
    setNombre(event.target.value);
    isNameValid(event.target.value);
  };
  const emailChanged = (event) => {
    setEmail(event.target.value);
    isEmailValid(event.target.value);
  };
  const telefonoChanged = (event) => {
    setTelefono(event.target.value);
    isPhoneValid(event.target.value);
  };
  const webChanged = (event) => {
    setWeb(event.target.value);
  };
  const mensajeChanged = (event) => {
    setMensaje(event.target.value);
    isMessageValid(event.target.value);
  };

  const isEmailValid = (value) => {
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (!value || !validEmail.test(value)) {
      setEmailIsInvalid(true);
      return false;
    }
    setEmailIsInvalid(false);
    return true;
  };

  const isPhoneValid = (value) => {
    const validPhone = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );

    // may be undefined
    if (value && !validPhone.test(value)) {
      setTelephoneIsInvalid(true);
      return false;
    }
    setTelephoneIsInvalid(false);
    return true;
  };

  const isNameValid = (value) => {
    if (!value) {
      setNombreIsInvalid(true);
      return false;
    }
    setNombreIsInvalid(false);
    return true;
  };

  const isMessageValid = (value) => {
    if (!value) {
      setMensajeIsInvalid(true);
      return false;
    }
    setMensajeIsInvalid(false);
    return true;
  };

  const isInputValid = () => {
    return (
      isEmailValid(email) &&
      isPhoneValid(telefono) &&
      isNameValid(nombre) &&
      isMessageValid(mensaje) &&
      checked1 &&
      checked2
    );
  };

  const submit = async () => {
    if (!isInputValid()) {
      return;
    }

    const data = new FormData();
    data.append("nombre", nombre);
    data.append("email", email);
    data.append("telefono", telefono);
    data.append("url", web);
    data.append("mensaje", mensaje);
    data.append("cenviar", "Enviar mensaje");

    // call to backend
    const response = await fetch("https://albertomilla.com/api/SendMail.php", {
      method: "POST",
      body: data,
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
          error={nombreIsInvalid}
          value={nombre}
          onChange={nombreChanged}
        />
        <TextField
          label="Email"
          required
          style={{ marginBottom: "20px" }}
          className="w-3/4 self-center"
          error={emailIsInvalid}
          value={email}
          onChange={emailChanged}
        />
        <TextField
          label="Tu web"
          style={{ marginBottom: "20px" }}
          className="w-3/4 mb-5 self-center"
          error={false}
          value={web}
          onChange={webChanged}
        />
        <TextField
          label="Tu telefono"
          style={{ marginBottom: "20px" }}
          className="w-3/4 mb-5 self-center"
          error={telephoneIsInvalid}
          value={telefono}
          onChange={telefonoChanged}
        />
        <TextField
          label="Escribe aqui tu mensaje"
          required
          multiline
          rows={10}
          className="w-3/4 mb-5 self-center"
          error={mensajeIsInvalid}
          value={mensaje}
          onChange={mensajeChanged}
        />
        <div
          className={`w-3/4 self-center text-xs ${
            checked1 ? "" : "text-red-600"
          }`}
        >
          <Checkbox
            checked={checked1}
            onChange={checkbox1Changed}
            size="small"
            required
          />
          He leído y acepto la Política de Privacidad
        </div>
        <div
          className={`w-3/4 mb-5 self-center text-xs ${
            checked2 ? "" : "text-red-600"
          }`}
        >
          <Checkbox
            checked={checked2}
            onChange={checkbox2Changed}
            size="small"
            required
          />
          Acepto que mis datos personales sean empleados para el envío de
          comunicaciones comerciales de ALBERTO MILLA, S.L. por medios
          electrónicos
        </div>
        <Button
          variant="outlined"
          className="mb-5 self-center h-12 w-3/4"
          onClick={submit}
        >
          Enviar
        </Button>
      </Box>
    </div>
  );
}

export default Contacto;
