import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../components/navigationbar/NavigationBarContext";

function AvisoLegal() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(false);
  }, []);

  return (
    <div className="m-7">
      AVISO LEGAL <br />
      En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
      Sociedad de la Información y de Comercio Electrónico (LSSI-CE), la empresa
      le informa que es titular del sitio web. De acuerdo con la exigencia del
      artículo 10 de la citada Ley, informa de los siguientes datos: El titular
      de este sitio web es: <br />
      <br />
      <table className="border-solid border-black border-2">
        <tbody>
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
          <tr>
            <th> Inscripción en el registro mercantil </th>
            <th> Número de inscripción </th>
          </tr>
        </tbody>
      </table>
      <br />
      USUARIOS <br />
      El acceso y/o uso de este portal le atribuye la condición de USUARIO, que
      acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí
      reflejadas. Las citadas Condiciones serán de aplicación independientemente
      de las Condiciones Generales de Contratación que en su caso resulten de
      obligado cumplimiento. <br />
      USO DEL PORTAL <br />
      La página web proporciona el acceso a multitud de informaciones,
      servicios, programas o datos (en adelante, “los contenidos”) en Internet
      pertenecientes a ALBERTO MILLA, S.L. o a sus licenciantes a los que el
      USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso
      del portal. Dicha responsabilidad se extiende al registro que fuese
      necesario para acceder a determinados servicios o contenidos. <br />
      En dicho registro el USUARIO será responsable de aportar información veraz
      y lícita. Como consecuencia de este registro, al USUARIO se le puede
      proporcionar una contraseña de la que será responsable, comprometiéndose a
      hacer un uso diligente y confidencial de la misma. El USUARIO se
      compromete a hacer un uso adecuado de los contenidos y servicios que
      ALBERTO MILLA, S.L. ofrece a través de su portal y con carácter
      enunciativo pero no limitativo, a no emplearlos para: <br />
      i. incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y
      al orden público <br />
      ii. difundir contenidos o propaganda de carácter racista, xenófobo,
      pornográfico-ilegal, de apología del terrorismo o atentatorio contra los
      derechos humanos <br />
      iii. provocar daños en los sistemas físicos y lógicos de ALBERTO MILLA,
      S.L., de sus proveedores o de terceras personas, introducir o difundir en
      la red virus informáticos o cualesquiera otros sistemas físicos o lógicos
      que sean susceptibles de provocar los daños anteriormente mencionados;{" "}
      <br />
      iv. intentar acceder y, en su caso, utilizar las cuentas de correo
      electrónico de otros usuarios y modificar manipular sus mensajes. ALBERTO
      MILLA, S.L. se reserva el derecho de retirar todos aquellos comentarios y
      aportaciones que vulneren el respeto a la dignidad de la persona, que sean
      discriminatorios, xenófobos, racistas, pornográficos, que atenten contra
      la juventud o la infancia, el orden o la seguridad pública o que, a su
      juicio, no resultaran adecuados para su publicación. En cualquier caso,
      ALBERTO MILLA, S.L. no será responsable de las opiniones vertidas por los
      usuarios a través de los foros, chats, u otras herramientas de
      participación. <br />
      PROPIEDAD INTELECTUAL E INDUSTRIAL <br />
      ALBERTO MILLA, S.L. será titular de todos los derechos de propiedad
      intelectual e industrial de su página web, así como de los elementos
      contenidos en la misma (a título enunciativo, imágenes, sonido, audio,
      vídeo, software o textos; marcas o logotipos, combinaciones de colores,
      estructura y diseño, selección de materiales usados, programas de
      ordenador necesarios para su funcionamiento, acceso y uso, etc.). <br />
      Todos los derechos reservados. En virtud de lo dispuesto en los artículos
      8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan
      expresamente prohibidas la reproducción, la distribución y la comunicación
      pública, incluida su modalidad de puesta a disposición, de la totalidad o
      parte de los contenidos de esta página web, con fines comerciales, en
      cualquier soporte y por cualquier medio técnico, sin la autorización de
      ALBERTO MILLA, S.L.. El USUARIO se compromete a respetar los derechos de
      Propiedad Intelectual e Industrial titularidad de ALBERTO MILLA, S.L..
      Podrá visualizar los elementos del portal e incluso imprimirlos, copiarlos
      y almacenarlos en el disco duro de su ordenador o en cualquier otro
      soporte físico siempre y cuando sea, única y exclusivamente, para su uso
      personal y privado. El USUARIO deberá abstenerse de suprimir, alterar,
      eludir o manipular cualquier dispositivo de protección o sistema de
      seguridad que estuviera instalado en el las páginas de ALBERTO MILLA,
      S.L.. <br />
      EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD <br />
      ALBERTO MILLA, S.L. no se hace responsable, en ningún caso, de los daños y
      perjuicios de cualquier naturaleza que pudieran ocasionar, a título
      enunciativo: errores u omisiones en los contenidos, falta de
      disponibilidad del portal o la transmisión de virus o programas maliciosos
      o lesivos en los contenidos, a pesar de haber adoptado todas las medidas
      tecnológicas necesarias para evitarlo. <br />
      MODIFICACIONES <br />
      ALBERTO MILLA, S.L. se reserva el derecho de efectuar sin previo aviso las
      modificaciones que considere oportunas en su portal, pudiendo cambiar,
      suprimir o añadir tanto los contenidos y servicios que se presten a través
      de la misma como la forma en la que éstos aparezcan presentados o
      localizados en su portal. <br />
      ENLACES <br />
      En el caso de que en la página web se dispusiesen enlaces o hipervínculos
      hacía otros sitios de Internet, ALBERTO MILLA, S.L. no ejercerá ningún
      tipo de control sobre dichos sitios y contenidos. En ningún caso ALBERTO
      MILLA, S.L. asumirá responsabilidad alguna por los contenidos de algún
      enlace perteneciente a un sitio web ajeno, ni garantizará la
      disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
      veracidad, validez y constitucionalidad de cualquier material o
      información contenida en ninguno de dichos hipervínculos u otros sitios de
      Internet. <br />
      Igualmente, la inclusión de estas conexiones externas no implicará ningún
      tipo de asociación, fusión o participación con las entidades conectadas.{" "}
      <br />
      DERECHO DE EXCLUSIÓN <br />
      ALBERTO MILLA, S.L. se reserva el derecho a denegar o retirar el acceso a
      portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia
      propia o de un tercero, a aquellos usuarios que incumplan las presentes
      Condiciones Generales de Uso. <br />
      GENERALIDADES <br />
      ALBERTO MILLA, S.L. perseguirá el incumplimiento de las presentes
      condiciones, así como cualquier utilización indebida de su portal
      ejerciendo todas las acciones civiles y penales que le puedan corresponder
      en derecho. <br />
      MODIFICACIÓN DE LAS PRESENTES CONDICIONES Y DURACIÓN <br />
      ALBERTO MILLA, S.L. podrá modificar en cualquier momento las condiciones
      aquí determinadas, siendo debidamente publicadas como aquí aparecen.{" "}
      <br />
      La vigencia de las citadas condiciones irá en función de su exposición y
      estarán vigentes hasta que sean modificadas por otras debidamente
      publicadas. <br />
      LEGISLACIÓN APLICABLE Y JURISDICCIÓN <br />
      La relación entre ALBERTO MILLA, S.L. y el USUARIO se regirá por la
      normativa española vigente y cualquier controversia se someterá a los
      Juzgados y tribunales de la ciudad anteriormente indicada. <br />
      <br /> <br /> <br /> <br />
      AVISO LEGAL EN INGLÉS <br />
      LEGAL ANNOUNCEMENT <br />
      In compliance with the Spanish Law 34/2002 of July 11, of the Information
      and E-commerce Services (Ley 34/2002, de 11 de julio, de Servicios de la
      Sociedad de la Información y de Comercio Electrónico)the company informs
      you that is the owner of the present website. According to what is
      required under article 10 of the aforementioned regulation, we must
      provide you with the following information: <br />
      The owner of the web site is: <br />
      <br />
      <table className="border-solid border-black border-2">
        <tbody>
          <tr>
            <th> Name of the Company </th>
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
          <tr>
            <th> Registration number </th>
            <th> Número de inscripción </th>
          </tr>
        </tbody>
      </table>
      <br />
      USERS <br />
      The Access and/or use of the site grants you the condition of USER, which
      you accept, under the General Terms of Use hereby stated. Such Terms will
      be applied independently from the applicable General Terms and Conditions.{" "}
      <br />
      USE OF THE WEBSITE <br />
      The web page grants access to a great amount of information, services,
      programs or data (onwards, “the contents”) in Internet belonging to the
      company or its licensors to whom the USER can have access. The USER
      undertakes the responsibility of the use of the web site. Such
      responsibility is extended to the necessary registration to access to
      certain services or contents. <br />
      In such registry the USER will be responsible of providing truthful and
      legal information. As a consequence of this registration, the USER can be
      provided with a password of which he/she will be made responsible,
      compromising to make diligent and confidential use of same. The USER
      agrees to make the correct use of contents and services which the company
      offers through its web site and, being of meaningful but not with
      limitative character and these shall not be used for: <br />
      (i) Incurring in illicit activities, illegal or opposed to good faith and
      public order. <br />
      (ii) Spreading contents or propaganda considered; racist, xenophobic,
      pornographic-illegal, of terrorism apology or attempting against human
      rights. <br />
      (iii) Causing damages on the physical or logical systems of the company
      Its suppliers or third parties, introducing or spreading computer virus on
      the web or any other physical or logic systems which may cause damages
      such as the mentioned before. <br />
      (iv) Trying to access or use the email accounts of other users and modify
      or manipulate their messages. The company reserves the right to withdraw
      all those comments which are discriminatory, xenophobic, racist, that
      attempt against childhood or public security. In any case the company will
      not be responsible for the opinions given by users through forums, chats
      or any other mean. <br />
      INTELLECTUAL AND INDUSTRIAL PROPERTY <br />
      The company will own all rights of industrial and intellectual property of
      its web page, as well as the elements contained in it (images, sound,
      audio, video, software or texts, trade- marks or logos, combination of
      colors, structure and design, selection of materials used, computer
      programs necessary for its functioning, access and use, etc.) <br />
      All rights reserved. According to articles 8 and 32.1, second paragraph,
      of the applicable Spanish Intellectual Property Law; reproduction,
      distribution and public communication are expressly forbidden, including
      the way of making available, totally or partially the contents of this web
      page, for business purposes, by any electronic means, without the
      authorization of The company. The USER is committed to respect the rights
      of Intellectual and Industrial Property, owned by The company. The USER
      will be able to visualize the elements of the site including print, copy
      or store them in the hard drive or your computer or any other physical
      support as long as it is solely and exclusively for its personal and
      private purpose. The USER will refrain from deleting, altering, eluding or
      manipulating any protection device or security system installed in the
      website of The company <br />
      EXCLUSION OF GUARANTEES AND RESPONSABILITIES <br />
      The company will not be responsible, under no circumstance, of any damage
      caused, for example by mistakes or omissions, lack of responsibility of
      the site or virus contamination or malicious programs in its contents, in
      spite of having taken all necessary technological measures to prevent it.{" "}
      <br />
      MODIFICATIONS <br />
      The company reserves the right, without prior notice, to make changes
      considered necessary thus, being able to change, eliminate or add not only
      the contents and services rendered by it but also the way in which they
      are presented or located in the site. <br />
      LINKS <br />
      In the case that in the web page, links or hyperlinks were made to other
      internet sites, The company will not execute any type of control of such
      sites and contents. The company under no circumstance will take any
      responsibility for the contents of some link belonging to another web
      site, nor guarantee the technical availability, quality, reliability,
      accuracy, veracity, validity or constitutionality of any material or
      information contained in none of such hyperlinks or other internet sites{" "}
      <br />
      Likewise, the inclusion of these external connections will not imply any
      kind of association, merging or participation with the connected entities.{" "}
      <br />
      EXCLUSION RIGHTS <br />
      The company reserves the right to deny or withdraw access to site and/or
      services offered, with no previous notification, on its own or a third
      party, to those users who do not comply with the current General
      Conditions of Use. <br />
      GENERALITIES <br />
      The company will chase the non-compliance of present conditions, as well
      as any doubtful use of its site by enforcing the civil and criminal legal
      actions which might correspond. <br />
      OF THE PRESENT CONDITIONS AND DURATION <br />
      The company could modify at any time the conditions hereby determined.{" "}
      <br />
      The validity of the conditions will be according to its publication and
      will be valid until duly published, or modified by other. <br />
      APPLICABLE LAW AND JURISDICTION <br />
      The relationship between The company and the USER will be governed by the
      Spanish regulations in force and any controversy will be submitted to the
      Courts of the aforementioned city. <br />
    </div>
  );
}

export default AvisoLegal;
