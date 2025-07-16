import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Apropos() {
  const {t} = useTranslation();
  return (
    <div>
      <h1 className='font-bold text-center text-lg md:text-xl text-green-300 mb-2'>{t('about.title')}</h1>
          <p className='text-sm md:text-lg font-semibold text-center'>
            {t('about.profile')}
          </p>
    </div>
  )
}
