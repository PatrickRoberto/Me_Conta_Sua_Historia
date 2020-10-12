import React from 'react';
import Header from './components/Header/Header';


export default function App({children}){

    return (
      <div>
        <Header />
        <div>
          {children}
        </div>
      </div> 
    );
  
}
