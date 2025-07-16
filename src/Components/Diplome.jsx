import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Diplome() {
  const { t } = useTranslation();
  const diplomes = [
    {id: 1, titre: t('degree.licence.title'), year: '2025', school:t('degree.licence.school'), filiere: t('degree.licence.field')},
    {id: 2, titre: t('degree.bts.title'), year: '2024', school:t('degree.bts.school'), filiere: t('degree.bts.field')},
    {id: 3, titre: t('degree.dut.title'), year: '2024', school:t('degree.dut.school'), filiere: t('degree.dut.field')},
    {id: 4, titre: t('degree.baccalaureat.title'), year: 2022, school:t('degree.baccalaureat.school'), filiere: 'C'},
    {id: 5, titre: t('degree.brevet.title'), year: '2019', school:t('degree.brevet.school'), filiere: ''},
    {id: 6, titre: t('degree.cf1.title'), year: '2015', school:t('degree.cf1.school'), filiere: ''}
  ]
  return (
    <div className='overflow-y-auto h-[79vh] custom-scrollbar'>
      {
        diplomes.map((diplome) => (
          <div key={diplome.id} className='p-4 m-3 border-b-2 text-justify'> 
              <h1 className='md:text-xl text-lg font-bold text-green-600'>{diplome.titre}</h1>
              <div className='flex flex-col'>
                 <span className='flex gap-2 font-bold text-sm uppercase'>{t('degree.school')}: <p className='font-semibold text-sm '>{diplome.school}</p></span>
                 <span  className='flex gap-2 font-bold text-sm uppercase'>{t('degree.year')}:<p className='font-semibold text-sm '>{diplome.year}</p></span>
              </div>
              {
                diplome.filiere && (
                  <span className='flex gap-2 font-bold text-sm uppercase'>{t('degree.field')}: <p className='font-semibold text-sm '>{diplome.filiere}</p></span>
                )
              }
          </div>
          
        ))
      }
    </div>
  )
}
