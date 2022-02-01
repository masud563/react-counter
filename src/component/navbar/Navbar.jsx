import React from 'react';

const Navbar =({totalCounters})=>{

  return (
    <React.Fragment>
      <div className="p-6 bg-slate-100">
        <nav>
          <a href="#" className='text-2xl'>Navbar</a>
          <span className="badge badge-secondary">{totalCounters}</span>
        </nav>
      </div>
    </React.Fragment>
  );
};

 
export default Navbar;