import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Content from './Components/Content';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Apropos from './Components/Apropos';
import Diplome from './Components/Diplome';
import Thecnologies from './Components/Thecnologies';
import MesServices from './Components/MesServices';
import './i18n';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        index:true,
        element: <Content/>
      },
      {
        path: '/apropos',
        element: <AboutMe/>,
        children: [
          {
            index: true,
            element: <Apropos/>
          },
          {
            path: '/apropos/diplome&parour',
            element: <Diplome/>
          },
          {
            path:'/apropos/technologie',
            element: <Thecnologies/>
          }
        ]
      },
      {
        path: '/projet',
        element: <Projects/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/services',
        element: <MesServices/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
