import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function Projects() {
  const {t} = useTranslation();
  const services = [
    {id: 1, description: t('project.erp.description'), titre:  t('project.erp.title'), avatar: '/images/erp.png', technologie: 'JavaScript, Css, JQuery, JWT, Symfony', statut: '', lien: 'https://github.com/malin-hash/ERP_gestion'},
    {id: 2, description:  t('project.e-commerce.description'), titre:  t('project.e-commerce.title'), avatar: '/images/ecommerce (1).png', technologie: 'JavaScript, Css, JQuery, JWT, Symfony', statut: '', lien: 'https://github.com/malin-hash/Ecommerce_dev'},
    {id: 3, description:  t('project.messagerie.description'), titre:  t('project.messagerie.title'), avatar: '/images/chat.png', technologie: 'React, Formik, Yup, TailwindCss, JWT, Symfony', statut: 'En développement...'},
    {id: 4, description:  t('project.gestion.description'), titre:  t('project.gestion.title'), avatar:'/images/vente.jpeg', technologie: 'PHP, HTML, CSS, JavaScript, Bootstrap', statut: '', lien: 'https://github.com/malin-hash/App_gestion_dev'},
    {id:5, description:  t('project.forum.description'), titre:  t('project.forum.title'), avatar: '/images/forum.jpeg', technologie: 'JavaScript, Css, HTML, PHP POO', statut: '', lien: 'https://github.com/malin-hash/Forum_dev'},
    {id: 6, description: t('project.blog.description'), titre:  t('project.blog.title'), avatar: '/images/blog.jpeg', technologie: 'JavaScript, Css, HTML, Boostrap, PHP POO', statut: '', lien: 'https://github.com/malin-hash/Blog_dev'}
  ] 
  return (
    <div className='md:mt-20 px-6'>
      <h1 className='text-center font-bold text-xl mb-3'>{t('project.title')}</h1>
      {/* Start Service */}
      <div className='grid md:grid-cols-2 grid-cols-1 mb-4'>
          {
            services.map((srv) => (
              <div key={srv.id} className='px-4 py-4 shadow-lg bg-slate-800 rounded-3xl m-1 space-y-3'>
                <div className=''>
                    <img src={srv.avatar} alt={srv.titre} className='objet-cover w-[100%] h-[10rem] rounded-3xl' />
                </div>
                <h1 className='md:text-xl text-lg font-bold text-center text-gray-100'>{srv.titre}</h1>
                <p className='text-center text-sm'>{srv.description}</p>
                <span className='text-sm p-2 rounded-3xl text-gray-900 font-extrabold bg-green-200 mt-4 flex justify-center italic text-center'>{srv.technologie}</span>
                <div className='flex space-x-3 justify-center'>
                  <Link to={srv.lien}  className='px-4 py-2 rounded-2xl bg-green-800  font-bold flex space-x-1 hover:bg-green-950 transition-colors duration-300 text-sm'>
                  { srv.statut && (srv.statut)}
                  {srv.statut == false && ( <span className='text-sm flex gap-1'><FaGithub size={24}/> Repository</span>)}
                   </Link>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}
