import './App.css';
import React from 'react';
import CookieConsent from "react-cookie-consent";

import { createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import { NavigationBarProvider } from './components/navigationbar/NavigationBarContext';

import Layout from './components/layout/Layout';
import NotFound from './components/NotFound/NotFound'

// image grids 
import Proyectos from './routes/Proyectos/Proyectos';
import Privado from './routes/Proyectos/Privado';
import Publico from './routes/Proyectos/Publico';
import Residencial from './routes/Proyectos/Residencial';
import Urbanismo from './routes/Proyectos/Urbanismo';

// privado
import CentroLogisticoConsum from './routes/Proyectos/Privado/CentroLogisticoConsum'
import ComedorConsum from './routes/Proyectos/Privado/ComedorConsum'
import EstudioDeArquitectura from './routes/Proyectos/Privado/EstudioDeArquitectura'
import Joyeria from './routes/Proyectos/Privado/Joyeria'
// publico
import CasalJoveSilla from './routes/Proyectos/Publico/CasalJoveSilla'
import CentroDeFormacionSilla from './routes/Proyectos/Publico/CentroDeFormacionSilla'
import CentroMultifuncionalCarmenValero from './routes/Proyectos/Publico/CentroMultifuncionalCarmenValero'
import PolideportivoXirivella from './routes/Proyectos/Publico/PolideportivoXirivella'
// residencial
//NOTFOUND import CasaAlbereda from './routes/Proyectos/Residencial/CasaAlbereda'
import CasaAlcudia from './routes/Proyectos/Residencial/CasaAlcudia'
import CasaCentreHistoric from './routes/Proyectos/Residencial/CasaCentreHistoric'
import CasaHorts from './routes/Proyectos/Residencial/CasaHorts'
import CasaLaBega from './routes/Proyectos/Residencial/CasaLaBega'
import CasaMoliDeMagallo from './routes/Proyectos/Residencial/CasaMoliDeMagallo'
import CasaSantaAna from './routes/Proyectos/Residencial/CasaSantaAna'
import EdificiChaplinSilla from './routes/Proyectos/Residencial/EdificiChaplinSilla'
import EdificiLluisVives from './routes/Proyectos/Residencial/EdificiLluisVives'
import EdificiNouAlgemesi from './routes/Proyectos/Residencial/EdificiNouAlgemesi'
// urbanismo
import Buitple from './routes/Proyectos/Urbanismo/Buitple'
import SantaAna from './routes/Proyectos/Urbanismo/SantaAna'
// politicas
import AvisoLegal from './routes/Politicas/AvisoLegal';
import Newsletter from './routes/Politicas/Newsletter';
import PoliticaDeCookies from './routes/Politicas/PoliticaDeCookies';
import PoliticaDePrivacidad from './routes/Politicas/PoliticaDePrivacidad';
// other 
import Estudio from './routes/Estudio';
import Contacto from './routes/Contacto';

// App routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      /** Routes for grid gallery */
      { path: "", element: <Proyectos /> },
      { path: "/Proyectos", element: <Proyectos /> },
      { path: "/Proyectos/Residencial", element: <Residencial /> },
      { path: "/Proyectos/Privado", element: <Privado /> },
      { path: "/Proyectos/Publico", element: <Publico /> },
      { path: "/Proyectos/Urbanismo", element: <Urbanismo /> },

      /** Routes for Project galleries (Privado)*/
      { path: "/Proyectos/Privado/CentroLogisticoConsum", element: <CentroLogisticoConsum /> },
      { path: "/Proyectos/Privado/ComedorConsum", element: <ComedorConsum /> },
      { path: "/Proyectos/Privado/EstudioDeArquitectura", element: <EstudioDeArquitectura /> },
      { path: "/Proyectos/Privado/Joyeria", element: <Joyeria /> },
      /** Routes for Project galleries (Publico)*/
      { path: "/Proyectos/Publico/CasalJoveSilla", element: <CasalJoveSilla /> },
      { path: "/Proyectos/Publico/CentroDeFormacionSilla", element: <CentroDeFormacionSilla /> },
      { path: "/Proyectos/Publico/CentroMultifuncionalCarmenValero", element: <CentroMultifuncionalCarmenValero /> },
      { path: "/Proyectos/Publico/PolideportivoXirivella", element: <PolideportivoXirivella /> },
      /** Routes for Project galleries (Residencial)
      { path: "/Proyectos/Residencial/CasaAlbereda", element: <CasaAlbereda /> },*/
      { path: "/Proyectos/Residencial/CasaHorts", element: <CasaHorts /> },
      { path: "/Proyectos/Residencial/CasaLaBega", element: <CasaLaBega /> },
      { path: "/Proyectos/Residencial/CasaMoliDeMagallo", element: <CasaMoliDeMagallo /> },
      { path: "/Proyectos/Residencial/CasaSantaAna", element: <CasaSantaAna /> },
      { path: "/Proyectos/Residencial/EdificiChaplinSilla", element: <EdificiChaplinSilla /> },
      { path: "/Proyectos/Residencial/CasaAlcudia", element: <CasaAlcudia /> },
      { path: "/Proyectos/Residencial/CasaCentreHistoric", element: <CasaCentreHistoric /> },
      { path: "/Proyectos/Residencial/EdificiLluisVives", element: <EdificiLluisVives /> },
      { path: "/Proyectos/Residencial/EdificiNouAlgemesi", element: <EdificiNouAlgemesi /> },
      /** Routes for Project galleries (Residencial)*/
      { path: "/Proyectos/Urbanismo/Buitple", element: <Buitple /> },
      { path: "/Proyectos/Urbanismo/SantaAna", element: <SantaAna /> },
      /** Routes for policies*/
       { path: "/Politicas/AvisoLegal", element: <AvisoLegal /> },
       { path: "/Politicas/PoliticaDePrivacidad", element: <PoliticaDePrivacidad /> },
       { path: "/Politicas/PoliticaDeCookies", element: <PoliticaDeCookies /> },
       { path: "/Politicas/Newsletter", element: <Newsletter /> },
      /** Routes for other*/
      { path: "/Estudio", element: <Estudio /> },
      { path: "/Contacto", element: <Contacto /> },
      ]},

])

function App() {
  return (
    <NavigationBarProvider>
      <RouterProvider router={router}/>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
      > Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa con la navegación, consideraremos que acepta este uso. 
       
      </CookieConsent>
    </NavigationBarProvider>
  );
}

export default App;