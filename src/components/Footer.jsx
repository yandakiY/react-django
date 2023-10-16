import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-row m-4 p-2 justify-between border-t'>
        <div className='text-center'>
            <div className='text-2xl pb-4'>Contact me</div>
            <div>
                <div>E-mail</div>
                <div>Twitter</div>
                <div>Telegram</div>
            </div>
        </div>
        <div className='text-center'>
            <div className='text-2xl pb-4'>Links</div>
            <div className=''>
                <div>E-mail</div>
                <div>Twitter</div>
                <div>Telegram</div>
            </div>
        </div>
        <div className='text-center'>
            <div className='text-2xl pb-4'>Members</div>
            <div>
                <div>Founders</div>
                <div>Partnerships</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer