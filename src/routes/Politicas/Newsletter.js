import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../components/navigationbar/NavigationBarContext";

function Newsletter() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(false);
  }, []);

  return (
    <div className="m-7">
      FORMULARIO DE NEWSLETTER <br />
      ALTA EN NEWSLETTER <br />
      Todo formulario de alta en una newsletter comercial deberá llevar su
      cláusula específica en la que el usuario autorice que se le envíe mailing
      comerciales. <br />
      INFORMACIÓN BÁSICA DE PROTECCIÓN DE DATOS: En cumplimiento del deber de
      informar a los interesados de las circunstancias y condiciones del
      tratamiento de sus datos y de los derechos que le asisten, ponemos a su
      disposición la siguiente información. <br />
      INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS <br />
      <br />
      <table className="border-solid border-black border-2">
        <tbody>
          <tr>
            <th> RESPONSABLE DEL TRATAMIENTO Responsable </th>
            <th>
              {" "}
              ALBERTO MILLA, S.L. - CIF: B97414007 Dir. Postal: Calle Peset
              Aleixandre 45 - Silla 46460 Valencia{" "}
            </th>
          </tr>
          <tr>
            <th> FINALIDAD </th>
            <th>
              {" "}
              Envío de comunicaciones comerciales por vía electrónica por parte
              de la empresa{" "}
            </th>
          </tr>
          <tr>
            <th> LEGITIMACIÓN </th>
            <th> Su consentimiento </th>
          </tr>
          <tr>
            <th> DESTINATARIOS </th>
            <th>
              {" "}
              Los datos no se cederán a terceros salvo en los casos en los que
              exista una obligación legal o comunicación necesaria para poder
              prestarle el servicio adecuadamente.{" "}
            </th>
          </tr>
          <tr>
            <th> DERECHOS </th>
            <th>
              {" "}
              Puede ejercer sus Derechos a acceder, rectificar, oponerse,
              limitar, portar y suprimir los datos ante el responsable del
              tratamiento; además de acudir a la autoridad de control competente
              (AEPD).{" "}
            </th>
          </tr>
          <tr>
            <th> INFORMACIÓN ADICIONAL </th>
            <th>
              {" "}
              Puede consultar la información adicional sobre el tratamiento de
              sus datos personales aquí.{" "}
            </th>
          </tr>
        </tbody>
      </table>{" "}
      <br />
      He leído y acepto la Política de Privacidad <br />
      ENVÍO DE COMUNICACIONES COMERCIALES <br />
      "De conformidad con lo dispuesto en la Ley Orgánica de Protección de Datos
      y Garantía de los Derechos Digitales, así como en la Ley de Servicios de
      la Sociedad de la Información, le informamos que sus datos están incluidos
      en nuestras bases de datos comerciales. El responsable del tratamiento es
      ALBERTO MILLA, S.L. y los datos son tratados con la finalidad de
      manteneros al día de nuestros productos y servicios. <br />
      Asimismo, le comunicamos que puede ejercitar en su caso la baja de la
      inscripción dirigiéndose a ALBERTO MILLA, S.L. a la siguiente Calle Peset
      Aleixandre 45 - Silla 46460 Valencia. Así mismo podrá ejercer el derecho
      de baja de esta suscripción en el siguiente enlace.” <br />
      <br /> <br /> <br />
      CLÁUSULA EN INGLÉS: <br />
      BASIC INFORMATION REGARDING DATA PROTECTION: In compliance with the
      information obligation established by the data protection regulation, we
      provide you the following information regarding the processing of your
      personal data: <br />
      BASIC INFORMATION REGARDING DATA PROTECTION <br />
      <br />
      <table className="border-solid border-black border-2">
        <tbody>
          <tr>
            <th> CONTROLLER </th>
            <th>
              {" "}
              ALBERTO MILLA, S.L. - CIF: B97414007 Dir. Postal: Calle Peset
              Aleixandre 45 - Silla 46460 Valencia{" "}
            </th>
          </tr>
          <tr>
            <th> PURPOSES </th>
            <th> Sending commercial information by electronic means. </th>
          </tr>
          <tr>
            <th> LEGITIMATE BASIS </th>
            <th> Your consent </th>
          </tr>
          <tr>
            <th> RECIPIENTS </th>
            <th>
              {" "}
              The personal data will not be forwarded to third parties unless
              legal obligation or necessary in order to provide you with the
              service.{" "}
            </th>
          </tr>
          <tr>
            <th> RIGHTS </th>
            <th>
              {" "}
              You are entitled to exercise your rights of access, to
              rectification, erasure, restriction, data portability and object.
              Moreover, you own the right to lodge a complaint with a
              supervisory authority{" "}
            </th>
          </tr>
          <tr>
            <th> ADDITIONAL INFORMATION </th>
            <th>
              {" "}
              You can check additional information about the processing of your
              personal data here.{" "}
            </th>
          </tr>
        </tbody>
      </table>{" "}
      <br />
      I have read and I accept the Privacy Policy <br />
      CLAUSES FOR SUBSCRIBERS (once they have received the Newsletter) <br />"
      According to what it is established by the applicable data protection
      regulation, we inform you that your data has been included to the
      commercial data base of ALBERTO MILLA, S.L., being processed with the
      purpose of sending the newsletter to which you have been subscribed.{" "}
      <br />
      Likewise we communicate to you that you can unsubscribe by sending a
      request to ALBERTO MILLA, S.L. to Calle Peset Aleixandre 45 - Silla 46460
      Valencia. You can also cancel your subscription through the following
      link.” <br />
    </div>
  );
}

export default Newsletter;
