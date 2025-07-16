import React, {useState} from 'react'
import DevWeb from './DevWeb';
import AnalyseConcep from './AnalyseConcep';
import Maintenance from './Maintenance';
import { useTranslation } from 'react-i18next';

export default function MesServices() {
  const { t } = useTranslation();
  // dev Modal
  const [modalDev, setModalDev] = useState(false);
  const startModal = () => setModalDev(true);

  // analyse Modal
  const [modalAnalyse, setModalAnalyse] = useState(false);
  const startAnalyse = () => setModalAnalyse(true);

  // Maintenance Modal
  const [modalMaintenance, setModalMaintenance] = useState(false);
  const startMaintenance = () => setModalMaintenance(true); 
  
  const services = [
    {id: 1, description: t('service.web.description'), titre: t('service.web.title'), avatar: '/images/4.jpg', modal: startModal},
    {id: 2, description: t('service.analyse.description'), titre: t('service.analyse.title'), avatar: '/images/web.jfif', modal: startAnalyse},
    {id: 3, description: t('service.maintenance.description'), titre: t('service.maintenance.title'), avatar: '/images/maint2.jfif', modal: startMaintenance},
  ] 
  return (
    <div className='md:mt-20 px-6'>
      {modalDev && (
        <DevWeb exitModal = {()=> setModalDev(false)}/>
      )}
      {
        modalAnalyse && (
          <AnalyseConcep exitModal = {() => setModalAnalyse(false)}/>
        )
      }
      { modalMaintenance && (
        <Maintenance exitModal = {() => setModalMaintenance(false)}/>
        )
      }
      <h1 className='text-center font-bold text-xl mb-3'>Mes Services</h1>
      {/* Start Service */}
      <div className='grid md:grid-cols-3 grid-cols-1'>
          {
            services.map((srv) => (
              <div key={srv.id} className='px-4 py-4  bg-slate-800 rounded-3xl m-1 space-y-3'>
                <div className='shadow-2xl'>
                    <img src={srv.avatar} alt={srv.titre} className='objet-cover w-[100%] h-[10rem] rounded-3xl' />
                </div>
                <h1 className='md:text-xl text-lg font-bold text-center text-gray-100'>{srv.titre}</h1>
                <p className='text-center text-sm'>{srv.description}</p>
                <div className='flex justify-center items-center'>
                   <button onClick={srv.modal} className='px-4 py-2 rounded-xl bg-green-800 font-bold hover:bg-green-950 transition-all duration-300 text-sm'>En savoir plus ...</button>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}
