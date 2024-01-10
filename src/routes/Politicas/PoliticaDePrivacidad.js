import { useContext, useEffect } from 'react';
import { NavigationBarContext } from '../../components/navigationbar/NavigationBarContext';

function PoliticaDePrivacidad(){
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(false);
    }, [])

    return (<div className='m-7'>
            POLÍTICA DE PRIVACIDAD  <br/>
            POLÍTICA DE PRIVACIDAD DEL SITIO WEB <br/>
            Somos una empresa en la que la transparencia en la información es fundamental para establecer una relación de confianza con las personas que forman nuestro proyecto y con nuestros proveedores y clientes, siendo la protección de los datos personales de las personas que confían en nosotros de vital importancia, por lo que queremos mediante la presente Política de privacidad informarte de cómo recabamos y cómo tratamos o utilizamos dichos datos. <br/>
            En esta política de privacidad se establecen las bases sobre las que la empresa, trata los datos de carácter personal que voluntariamente nos facilitan nuestros usuarios a través de la página web. <br/>
            Esta Política siempre será aplicable cuando se faciliten datos a la empresa, el cual será responsable de sus datos (Responsable del Tratamiento de los Datos), y a través de cualquiera de los formularios de contacto o suscripción donde se recojan datos de carácter personal (nombre, email, etc.). <br/>
            A QUÉ NOS COMPROMETEMOS <br/>
            •	A respetar la privacidad de nuestros usuarios y tratar los datos personales con el consentimiento de los mismos. <br/>
            •	A tratar los datos personales que estrictamente necesitemos para dar el servicio solicitado, y tratarlos de forma segura y confidencial, tomando las medidas necesarias para evitar el acceso no autorizado y el uso indebido de los mismos. <br/>
            •	A no utilizar los datos personales para finalidades para las que no hemos obtenido previamente el consentimiento. <br/>
            •	A no dar los datos personales a terceros ni compartirlos. <br/>
            •	A conservar los datos personales durante el tiempo estrictamente necesario para la finalidad concreta para la que han sido proporcionados. <br/><br/>
            
            <table className="border-solid border-black border-2">
                <tr>
                    <th> Nombre de la empresa </th>
                    <th> ALBERTO MILLA, S.L. </th>
                </tr>
                <tr>
                    <th> NIF </th>
                    <th> B97414007 </th>
                </tr>
                <tr> 
                    <th> Direccion </th>
                    <th> Calle Peset Aleixandre 45 - Silla 46460 Valencia </th>
                </tr>
            </table>	<br/>
            
            QUÉ ES UN DATO PERSONAL Y EL TRATAMIENTO DE DATOS PERSONALES <br/>
            Un dato personal es toda información sobre una persona física identificada o identificable. Se considera persona física identificable toda persona cuya identidad pueda determinarse directa o indirectamente, en particular mediante un identificador, como por ejemplo un nombre, un número de identificación, datos de localización, un identificador en línea o uno o varios elementos propios de la identidad física, fisiológica, genética, psíquica, económica, cultural o social de dicha persona.  <br/>
            Asimismo, el tratamiento de datos personales implica cualquier operación o conjunto de operaciones realizadas sobre datos personales o conjuntos de datos personales, ya sea por procedimientos automatizados o no, como la recogida, registro, organización, estructuración, conservación, adaptación o modificación, extracción, consulta, utilización, comunicación por transmisión, difusión o cualquier otra forma de habilitación de acceso, cotejo o interconexión, limitación, supresión o destrucción. <br/>
            
            QUÉ TRATAMIENTOS REALIZAMOS SOBRE SUS DATOS PERSONALES Y PARA QUÉ FINALIDADES <br/>
            •	Solicitud de información por parte del usuario <br/>
            Gestionar la solicitud de información remitida por parte del usuario a través del formulario de contacto y/o la dirección de correo electrónico, correo postal y/o número de teléfono facilitado a través del sitio web.  <br/>
            
            •	Suscripción a newsletter <br/>
            Gestionar la suscripción al envío de newsletter  <br/>
            
            •	Trabajar con nosotros mediante el envío del currículum <br/>
            Gestión de los CV recibidos a través del formulario disponible en el sitio web. <br/>
            
            •	Alta y acceso al perfil de usuario <br/>
            Gestión del alta y del acceso al portal de usuario mediante la correspondiente cuenta de usuario y contraseña.  <br/>
            •	Gestión de los comentarios en el blog. <br/>
            Gestionar el envío y recepción de los comentarios que el usuario haya dejado en el blog. <br/>
            
            QUÉ DATOS PERSONALES CAPTAMOS <br/>
            A través de nuestra página web podemos recabar datos personales para diferentes finalidades: <br/>
            •	Solicitud de información por parte del usuario <br/>
            Captaremos aquellos datos personales que nos haya facilitado con motivo de la consulta planteada. <br/>
            
            •	Suscripción a newsletter <br/>
            Captaremos su dirección de correo electrónico.  <br/>
            
            •	Trabaja con nosotros mediante el envío de currículum  <br/>
            Captaremos la información contenida en el CV que nos haya facilitado.  <br/>
            
            •	Alta y acceso al perfil de usuario <br/>
            Nombre de usuario y contraseña, así como cualquier otro dato que se haya facilitado con el fin de crear la cuenta o perfil. <br/>
            •	Gestión de los comentarios en el blog. <br/>
            Cualquier dato que se haya facilitado al publicar el correspondiente comentario.  <br/>
            
            Dependiendo de la finalidad para la que se aportan los datos, serán requeridos los datos estrictamente necesarios.  <br/>
            Es importante que el usuario sea consciente de los datos que aporta y la finalidad para la que lo hace porque en el momento que los facilita, está aceptando que recopilemos, almacenemos y usemos dichos datos para la finalidad requerida, pudiendo en cualquier momento retirar el consentimiento prestado por los cauces oportunos siendo el consentimiento del interesado la base legal y legitimación para el tratamiento de sus datos personales. <br/>
            
            
            
            CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE LOS DATOS PERSONALES <br/>
            De acuerdo con la normativa vigente en materia de protección de datos, necesitamos una base de legitimación para el tratamiento de sus datos personales. La base de legitimación es su consentimiento.  <br/>
            QUÉ DERECHOS TIENE SOBRE LOS DATOS PERSONALES APORTADOS <br/>
            Como usuario, puede ejercitar los siguientes derechos:  <br/>
            •	Derecho de acceso: Tiene derecho a obtener por parte de la empresa confirmación de si se están tratando o no sus datos personales que, y en su caso, qué datos trata. <br/>
            •	Derecho de rectificación: Tiene derecho a obtener por parte de ALBERTO MILLA, S.L., la rectificación de los datos personales inexactos que le conciernan. En la solicitud de rectificación deberá indicar los datos que desea que se modifiquen. <br/>
            •	Derecho de oposición: Tiene derecho a oponerse en cualquier momento, por motivos relacionados con su situación particular, a que datos personales que le conciernan sean objeto de un tratamiento basado en el interés legítimo de la empresa. En ese caso, la empresa dejará de tratar los datos personales, salvo que acreditemos motivos legítimos imperiosos para el tratamiento  que prevalezcan sobre sus intereses, derechos y libertades, o para la formulación, el ejercicio o la defensa de reclamaciones. <br/>
            •	Derecho de supresión: Tiene derecho a obtener por parte de ALBERTO MILLA, S.L., la supresión de los datos personales que le conciernan. <br/>
            •	Derecho a la portabilidad de los datos: Tiene derecho a que la empresa transfiera sus datos personales a otro responsable del tratamiento. Solo es posible ejercer este derecho cuando el tratamiento esté basado en la ejecución de un contrato o en su consentimiento y el tratamiento se realice por medios automatizados. <br/>
            •	Derecho a la limitación del tratamiento: Tiene derecho a solicitarnos que suspendamos el tratamiento de sus datos cuando: impugne la exactitud de los datos, mientras ALBERTO MILLA, S.L. verifica dicha exactitud; haya ejercido el derecho de oposición al tratamiento de sus datos, mientras que se verifica si los motivos legítimos de ALBERTO MILLA, S.L. prevalecen sobre los suyos como interesado. <br/>
            
            En cualquier momento, podrá ejercitar estos Derechos, mediante un escrito y acreditando su personalidad dirigido al responsable del tratamiento a la dirección señalada anteriormente, o a través de la dirección de correo electrónico: mail de contacto. <br/>
            Además, podrá presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si considera que el tratamiento de datos personales infringe la legislación aplicable. <br/>
            SEGURIDAD Y ALMACENAMIENTO DE LOS DATOS <br/>
            Mantendremos los datos durante el tiempo estrictamente necesario para la prestación del servicio solicitado y mientras el titular no solicite su eliminación, adoptando las medidas adecuadas de carácter técnico y organizativo contra el tratamiento no autorizado o ilícito y contra su pérdida, destrucción o daño accidentales, haciendo todo lo posible por protegerlos y mantenerlos de forma segura. <br/>
            
            
            
            QUÉ DATOS PERSONALES COMPARTIMOS CON TERCEROS <br/>
            No se prevén cesiones de datos salvo en aquellos casos en que exista una obligación legal o comunicación necesaria para poder prestarle el servicio solicitado adecuadamente. No hay previsión de transferencias de datos internacionales. <br/>
            
             <br/> <br/> <br/> 
            POLÍTICA DE PRIVACIDAD EN INGLÉS <br/>
            PRIVACY POLICY <br/>
            We are a company in which information transparency is essential for establishing relationships of trust with the people who make up our project and with our suppliers and customers, and protecting the personal data of those who trust us is of vital importance. Accordingly, we want this Privacy Policy to inform you about how we collect, process and use the data. <br/>
            This Privacy and Personal Data Protection Policy establishes the bases on which the company processes the personal data that our users voluntarily send us through the website. <br/>
            The present Privacy Polly will be applicable when the company collects your personal data through de different contact forms available in this website. When processing your personal data, the company will act as the Data Controller.  <br/>
            OUR COMMITMENT <br/>
            •	To respect the privacy of our users and process their personal data with their consent. <br/>
            •	To process the personal data that we strictly need to provide the requested service and process the data securely and confidentially, taking the necessary measures to prevent unauthorized access and improper use thereof. <br/>
            •	Not to use personal data for purposes for which we have not previously obtained consent. <br/>
            •	Not to send personal information to third parties or share such data. <br/>
            •	To keep personal data for as long as is strictly necessary for the specific purpose for which the data were provided, with regular revision of those needs and deletion of data that are not necessary. <br/>
            •	
            WHO IS THE DATA CONTROLLER <br/><br/>
            <table className="border-solid border-black border-2">
                <tr>
                    <th> Name of the company </th>
                    <th> ALBERTO MILLA, S.L. </th>
                </tr>
                <tr>
                    <th> TAX ID </th>
                    <th> B97414007 </th>
                </tr>
                <tr> 
                    <th> Address </th>
                    <th> Calle Peset Aleixandre 45 - Silla 46460 Valencia </th>
                </tr>
            </table><br/>	
            
            WHAT ARE PERSONAL DATA AND PROCESSING OF PERSONAL DATA <br/>
            Personal data means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. <br/>
            
            Moreover, processing means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction. <br/>
            
            
            
            
            
            WHAT DATA PROCESSING DO WE CARRY OUT AND FOR WHAT PURPOSES <br/>
            •	User information request. <br/>
            To manage the information request sent by the user through the contact form, job application form and/or through the e-mail, postal address and phone number provided in the website.  <br/>
            •	Subscribe to newsletters. <br/>
            To manage the subscription to newsletters. <br/>
            •	Work with us by sending  your curriculum vitae <br/>
            To manage the received CV through the contact form available in the website.  <br/>
            •	Creation and access to the user account <br/>
            To manage the creation and access to the user account with the corresponding user name and password.  <br/>
            •	Management of the comments left on the blog <br/>
            To manage publication of the comments that the user has left on the blog.  <br/>
            
            WHAT PERSONAL INFORMATION DO WE COLLECT <br/>
            Through our website we may collect personal data for different purposes: <br/>
            •	User information request. <br/>
            We will capture the personal data that you have provided us in order to give an answer to your request. <br/>
            
            •	Subscribe to newsletters. <br/>
            We will capture your e-mail address. <br/> 
            
            •	Work with us by sending your curriculum vitae <br/>
            We will capture the information contained in the CV that you have provided us. <br/>
            
            •	Creation and access to the user account <br/>
            We will capture your user name and password and/or any other information you have provided for the creation of the profile/account. <br/>
            •	Management of the comments left on the blog <br/>
            Any personal data that has been published when commenting the post. <br/>
            
            Depending on the purpose for which the data are provided, only the strictly necessary data will be requested. <br/>
            It is important for the user to be aware of the data provided and the purpose for which it is provided because in so doing, she/he authorizes us to collect, store and use such data for the required purpose and she/he may at any time withdraw the consent provided by the appropriate channels, with the consent of the interested party being the legal basis and legitimacy of the processing of their personal data. <br/>
            WHAT IS THE LEGITIMATE BASIS FOR THE PROCESSING OF YOUR PERSONAL DATA <br/>
            According to the applicable data protection regulation, we need a legitimate basis for the processing of your personal data. The legitimate basis in this case is your consent. <br/>
            WHAT RIGHTS DO YOU HAVE OVER THE PERSONAL DATA PROVIDED? <br/>
            As a user, you can exercise the following rights: <br/>
            •	Right of access: You have the right to obtain from the company confirmation as to whether o nor personal data concerning you are being processed, and, where that is the case, access to the personal data. <br/>
            •	Right to rectification: You have the right to obtain from the company without undue delay the rectification of inaccurate personal data concerning you. In the rectification application you should specify the personal data you wish to rectify.  <br/>
            •	Right to object: You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you which is based on the legitimate interest. The company shall no longer process the personal data unless the company demonstrates compelling legitimate grounds for the processing which override the interest, rights and freedoms of the data subject or for the or the establishment, exercise or defence of legal claims. <br/>
            •	Right to erasure: You have the right to obtain from the company the erasure of personal data concerning you. <br/>
            •	Right to data portability: You have the right to receive your personal data, which you have provided to the company, in a structured, commonly used and machine- readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided.  <br/>
            •	Right to restriction of processing: You have the right to obtain from the company restriction of processing where: the accuracy of the personal data is contested by the data subject; the processing is unlawful and the data subject opposes the erasure of the personal data and request the restriction of their use instead; the controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims. <br/>
            
            You can exercise your rights by sending a request to the address specified above or via e-mail to the following e-mail address mail de contacto. <br/>
            With your request you must send a copy of your ID. <br/>
            Likewise, we inform you that if you are not pleased with our answer, you can fill a complaint in front of the competent authority (Agencia Española de Protección de Datos). <br/>
            DATA SECURITY AND STORAGE <br/>
            We will retain the data for the time strictly necessary for the provision of the requested service and as long as the data subject does not request its deletion, adopting the appropriate technical and organizational measures against unauthorized or illegal processing and against accidental loss, destruction or damage, and doing everything possible to protect and maintain the data securely.  <br/>
            ADDRESSEES OF PERSONAL DATA: <br/>
            The company does not communicate your personal data to third parties, unless legal requirement or necessary in order to provide the requested service.  <br/>
            International transfers of personal data are not foreseen. <br/>

    </div>)
}

export default PoliticaDePrivacidad;