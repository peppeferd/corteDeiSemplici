'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.webp';
import {MobileView, BrowserView} from 'react-device-detect';
import {Modal, Button} from 'antd';

const BannerAlloggi = () => {
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
    <div className='text-center'>
      <BrowserView>
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
            <h1> Alloggi.</h1>
            <br /><h3>
              Le nostre camere e suite sono un rifugio di tranquillità,
              dove il calore del legno antico si fonde
              con l'eleganza discreta di un ambiente
              curato nei minimi dettagli.
            </h3>
          </div>
          <Button type="primary">Inizia da qui</Button>
        </div>
      </BrowserView>
      <MobileView>
        <>
       <div className='text-center mt-[1000vh] md:ml-0 ml-[150%]'> <Button className='text-center' type="primary" onClick={showModal}>
        Inizia da qui
       </Button>
        </div> 
        <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        >
        <div className="w-fit py-56 text-center bg-linear-to-r from-amber-300 to-amber-50 h-full border-l-4 border-t-4 border-b-4 border-black">
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
            <h1>Alloggi.</h1>
            <br /><h3>
             Le nostre camere e suite sono un rifugio di tranquillità, dove il calore del legno antico si fonde con l'eleganza discreta di un ambiente curato nei minimi dettagli.
            </h3>
          </div>
          <Button className="" type="primary">Inizia da qui</Button>
        </div>
      </Modal>
      </>
      </MobileView>
    </div>
  );
};

export default BannerAlloggi;
