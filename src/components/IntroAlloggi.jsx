'use client';
import {useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import image1 from '../../public/images/Allog.jpg';

gsap.registerPlugin (ScrollTrigger); // Register Gsap Scroll Trigger Plugin

// I used freepik images link for this purpose
const imageUrls = [
  'https://itsincom.it/wp-content/uploads/2024/05/06-B.jpg',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/180179554.jpg?k=39160d3377b204623e45c7dc95bd5f2097c2cb8beecb006e7de0730d1fef7ebd&o=&hp=1',
  'https://www.nidodelbrenta.it/wp-content/uploads/2021/06/GaiaBrunelloPhoto_Pinzolo_hd-100.jpg',
];

const IntroAlloggi = () => {
  const imagesRef = useRef ([]); // Fix to store multiple refs

  useGSAP (() => {
    // Convert the current array of image references to a proper array for GSAP manipulation
    const images = gsap.utils.toArray (imagesRef.current);

    // Iterate over each image element
    images.forEach ((panel, i) => {
      let scale = 1;

      // If the current image is not the last one, adjust the scale based on its index
      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i; // Create a slight scaling effect for images based on their index
      }

      gsap.to (panel, {
        scale: scale,
        transformOrigin: 'top center', // Specify the point from which the scaling transformation occurs
        ease: 'none',

        // Configure the ScrollTrigger plugin for scroll-based animations
        scrollTrigger: {
          trigger: panel, // Set the current image as the trigger for the ScrollTrigger

          // Define when the animation should start based on the position of the trigger
          start: 'top ' + (70 + 40 * i), // Start the animation when the top of the panel is 70px down plus an offset based on index
          end: 'bottom +=650px', // Define when the animation should end (bottom of the panel + 650px)
          endTrigger: '.end', // Specify the end trigger element
          pin: true, // Pin the current panel/image in place while it is being triggered
          pinSpacing: false, // Disable additional spacing around pinned elements
          scrub: true, // Enable scrub for smooth animation with scrolling
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-2xl py-12">
      {imageUrls.map ((image, index) => (
        <div
          key={index}
          ref={el => (imagesRef.current[index] = el)}
          className=""
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
      <div className="end" />
    </div>
  );
};

export default IntroAlloggi;
