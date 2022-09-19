import React from 'react';

const Header = () => {
  return (
    <div className='d-flex justify-content-between p-3 bg-dark text-white'>
        <div>PoolCarz</div>
        <div className='d-flex justify-content-around'>
            <div className='px-5'>Home</div>
            <div>Logout</div>
        </div>
    </div>
  )
}

export default Header