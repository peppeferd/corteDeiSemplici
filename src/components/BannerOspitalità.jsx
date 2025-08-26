'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.webp';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import {Button} from 'antd';
const BannerOspitalità = () => {
  return (
    <div>
      <div className="w-100 px-5 py-56 text-center bg-linear-to-r from-amber-300 to-amber-50 h-full border-l-4 border-t-4 border-b-4 border-black">
        <div className="flex flex-row my-3">
          <Image src={logo} alt="" width={100} height={100} />
          <Image src={'/images/name.webp'} alt="" width={100} height={100} />
        </div>
        <div>
          <h1>
            Ospite, c'è un'esperienza che ti attende.
          </h1>
          <br />
          <h3>
            Scorri per scoprire come ogni dettaglio può essere personalizzato e scegli il capitolo da cui iniziare la tua storia con noi.
          </h3>
          <br />
          <h1> Ospitalità: il viaggio che ti aspetta.</h1>
          <br /><h3>
            Corte dei Semplici nasce dall'amore per l'accoglienza,
            la natura e il tempo di qualità.
            Qui ogni dettaglio è pensato per risvegliare i tuoi sensi,
            nutrire il presente e lasciare un segno indelebile
            nella tua memoria.
          </h3>
        </div>
        <Button className="" type="primary">Inizia da qui</Button>
      </div>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </div>
  );
};

export default BannerOspitalità;
