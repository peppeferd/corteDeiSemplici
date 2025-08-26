'use client';
import Image from 'next/image';
import Pic1 from '../../public/images/matrimonio-a-tema.jpeg';
import Pic2 from '../../public/images/photo3jpg.jpg';
import {useScroll, useTransform, motion} from 'framer-motion';
import {useEffect, useRef} from 'react';
import Lenis from 'lenis';

export default function LastSection () {
  const container = useRef ();
  const {scrollYProgress} = useScroll ({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect (() => {
    const lenis = new Lenis ();

    function raf (time) {
      lenis.raf (time);
      requestAnimationFrame (raf);
    }

    requestAnimationFrame (raf);
  }, []);

  return (
    <main ref={container} className="relative max-h-[40%] mb-100">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {
  const scale = useTransform (scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform (scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{scale, rotate}}
      className="sticky top-0 h-110 bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >

      <div className="flex flex-row gap-4">
        <p>Celebrazioni</p>
        <div className="w-[12.5vw]">
          <Image src={Pic1} alt="img" placeholder="blur" fill />
        </div>

      </div>
    </motion.div>
  );
};

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform (scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform (scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{scale, rotate}} className="relative h-110">
      <Image src={Pic2} alt="img" placeholder="blur" fill />
    </motion.div>
  );
};
