import React, {useState} from 'react'
import { FaWhatsapp} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { HiPhone } from 'react-icons/hi';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const {t} = useTranslation();
  const [feedback, setFeedback] = useState('')
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('contact.validation.name')),
      // .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email(t('contact.validation.email'))
      .required(t('contact.validation.emailReq')),
    subject: Yup.string()
      .required(t('contact.validation.subject')),
    message: Yup.string()
      .required(t('contact.validation.message'))
      // .min(10, 'Message must be at least 10 characters')
  });
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    const serviceId = 'service_fcjjogj';
    const templateId = 'template_ynl5km4';
    const publicKey = 'WPsFJMYav8aA87Hs0';

    emailjs.send(
      serviceId,
      templateId,
      values,
      publicKey
    )
      .then(() => {
        setFeedback(t('contact.msg'));
        resetForm();
      })
      .catch(() => {
        setFeedback(t('contact.msg1'));
      })
      .finally(() => {
        setSubmitting(false);
      });
  }
  return (
<div className='flex flex-col md:-mt-16 md:py-20 px-20'>
  <div className='md:flex-col flex md:space-y-6 space-x-6'>
    <div className='grid md:grid-cols-4 grid-cols-2 gap-2 mt-4 md:ml-72'>
      <div className='flex gap-2 mb-3 '>
        <FaWhatsapp size={24} className='text-green-600'/>
         <span className='font-bold'>(+236) 74427249</span>
      </div>
      <div className='flex gap-2 '>
        <HiPhone size={20} className='text-blue-600'/>
         <span className='font-bold'>(+236) 74427249</span>
      </div>
    </div>
  </div>
       {feedback && (
      <div className={feedback.includes('succès') ? 'text-green-500 text-center font-bold md:text-xl text-sm' : 'text-red-600 text-center font-bold md:text-xl text-sm italic'}>
        {feedback}
      </div>
    )}
    <div className=' flex-1 flex-col gap-2 text-black'>
      <h1 className='text-white font-bold text-xl text-center mb-3 md:mb-5'>👉👉 {t('contact.title')} 👈👈</h1>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-2'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
              <div className='flex flex-col'>
              <ErrorMessage name='name' component='div' className='text-red-500 text-sm' />
              <Field type='text' name='name' className='p-2 rounded-md bg-gray-200 border-2 hover:border-blue-600' placeholder= {t('contact.name')}/>
            </div>
            <div className='flex flex-col'>
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
              <Field type='email' name='email' className='p-2 rounded-md bg-gray-200 border-2 hover:border-blue-600' placeholder= {t('contact.mail')}/>
            </div>
            </div>
            <div className='flex flex-col'>
              <ErrorMessage name='subject' component='div' className='text-red-500 text-sm' />
              <Field type='text' name='subject' className='p-2 rounded-md bg-gray-200 border-2 hover:border-blue-600' placeholder= {t('contact.object')}/>
            </div>
            <div className='flex flex-col'>
              <ErrorMessage name='message' component='div' className='text-red-500 text-sm' />
              <Field as="textarea" name="message" rows="4" className='p-2 rounded-md bg-gray-200 border-2 hover:border-blue-600' placeholder= {t('contact.message')}></Field>
            </div>
            <button type="submit" disabled={isSubmitting} className={isSubmitting ? 'bg-gray-400 cursor-not-allowed mt-0 p-2 rounded-md' : 'bg-blue-600 hover:bg-blue-800 p-2 rounded-md text-white'}>
             {t('contact.button')}
            </button>
          </Form>
        )}
       
      </Formik>
    </div>
</div>
  )
}
