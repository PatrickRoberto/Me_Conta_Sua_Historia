import React from 'react';
import Header from './components/Header/Header';


export default function App({children}){

    return (
      <div className="">
        <Header />
        <div>
          {children}
        </div>
      </div> 
    );
  
}
