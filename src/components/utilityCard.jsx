import React from 'react'

const UtilityCard = ({obj}) => {
  return (
    <div
      key={obj.fields.title}
      className='flex flex-col rounded-lg shadow-lg overflow-hidden'
    >
     
        <img
          className='object-contain my-5 h-20'
          src={obj.fields.file.url}
          alt=''
        />
      <div className='flex-1 p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='block mt-2'>
            {/* <p className='text-xl font-semibold text-gray-900'>
                          {obj.fields.title}
                        </p> */}
            <p className='mt-3 text-base font-bold text-gray-900'>
              {obj.fields.description}
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UtilityCard