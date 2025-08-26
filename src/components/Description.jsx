'use client';
import React, {useLayoutEffect, useRef} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './styleDescription.module.css';

const phrases = [
  `In un'area immersa nel verde`,
  'troverai accoglienza e personale a tua disposizione',
  'avrai non solo un ottimo posto per ristorarti',
  'ma potrai anche fermarti nei nostri alloggi',
  'e godere della natura mentre assaggi i nostri piatti',
];

export default function Description () {
  return (
    <div className={styles.description}>
      {phrases.map ((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({children}) {
  const text = useRef (null);

  useLayoutEffect (() => {
    gsap.registerPlugin (ScrollTrigger);
    gsap.from (text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
    });
  }, []);

  return <p className="text-5xl my-12" ref={text}>{children}</p>;
}
