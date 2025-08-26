import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.webp';

import {Button} from 'antd';
const BannerAlloggi = () => {
  return (
    <div className="w-100 mx-5 my-56 text-center">

      <div className="flex flex-row my-3">
        <Image src={logo} alt="" width={100} height={100} />
        <Image src={'/images/name.webp'} alt="" width={100} height={100} />
      </div>

      <div className="text-xl">

        <h1>
          Ospite, c'è un'esperienza che ti attende.
        </h1>
        <br />
        <h3>
          {' '}
          Scorri per scoprire come ogni dettaglio può essere personalizzato e scegli il capitolo da cui iniziare la tua storia con noi.
        </h3>
        <br />
        <h1> Alloggi.</h1>        <br /> <h3>
          Le nostre camere e suite sono un rifugio di tranquillità,
          dove il calore del legno antico si fonde
          con l'eleganza discreta di un ambiente
          curato nei minimi dettagli.
        </h3>
      </div>
      <Button className="" type="primary">Inizia da qui</Button>

    </div>
  );
};

export default BannerAlloggi;
