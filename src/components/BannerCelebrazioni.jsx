'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.webp';
import {MobileView, BrowserView} from 'react-device-detect';
import {Modal, Button} from 'antd';

const BannerCelebrazioni = () => {
  const [isModalOpen, setIsModalOpen] = useState (false);

  const showModal = () => {
    setIsModalOpen (true);
  };

  const handleOk = () => {
    setIsModalOpen (false);
  };

  const handleCancel = () => {
    setIsModalOpen (false);
  };
  return (
    <div>
      <BrowserView>
        <div className="w-100 px-5 py-56 text-center bg-linear-to-r from-amber-300 to-amber-50 h-full border-l-4 border-t-4 border-b-4 border-black">
          <div className="flex flex-row my-3">
            <Image src={logo} alt="" width={100} height={100} />
            <Image src={'/images/name.webp'} alt="" width={100} height={100} />
          </div>
          <div>
            <br />
            <h1> Celebrazioni.</h1>
            <br /><h3>
             Ogni grande momento merita un luogo che sappia custodirlo con cura. Matrimoni, anniversari o feste speciali: a Corte dei Semplici ogni evento prende vita intorno a te.
            </h3>
          </div>
          <Button type="primary">Inizia da qui</Button>
        </div>
      </BrowserView>
      <MobileView>
        <>
         <div className='text-center my-12'> 
           <Button className='text-center' type="primary" onClick={showModal}>
             Inizia da qui
            </Button>
        </div> 
       {isModalOpen &&
        <div className="w-fit py-56 text-center bg-linear-to-r from-amber-300 to-amber-50 h-full border-4 border-black">
          <div className="flex flex-row my-3">
            <Image src={logo} alt="" width={100} height={100} />
            <Image src={'/images/name.webp'} alt="" width={100} height={100} />
          </div>
           <div>
            <br />
            <h1> Celebrazioni.</h1>
            <br /><h3>
             Ogni grande momento merita un luogo che sappia custodirlo con cura. Matrimoni, anniversari o feste speciali: a Corte dei Semplici ogni evento prende vita intorno a te.
            </h3>
          </div>
          <Button className="" type="primary">Inizia da qui</Button>
        </div>
       }
        </>
        </MobileView>
    </div>
  );
};

export default BannerCelebrazioni;
