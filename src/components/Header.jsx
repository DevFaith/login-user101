import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-16 bg-slate-700 w-full flex justify-between items-center px-4'>
      <h1 className='text-white text-xl font-bold'>Gen Z</h1>
      <div className='flex space-x-10'>
        <Link to="/login" className='text-white cursor-pointer hover:text-slate-400'>
          LogIn
        </Link>
        <Link to="/signup" className='text-white cursor-pointer hover:text-slate-400'>
          SignUp
        </Link>
        <Link to="/logout" className='text-white cursor-pointer hover:text-slate-400'>
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default Header;
