import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>A sua foi feita com sucesso!</h2>
        <p className="email-msg">Verifica o teu email para confirmar a compra.</p>
        <p className="description">
          Se tiveres uma dúvida, deixe neste e-mail 
          <a className="email" href="msaquende18@gmail.com">
            msaquende18@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuar á compra 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
