import PropTypes from 'prop-types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function SecondaryButton({ children }) {
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const xTo = useRef();
  const yTo = useRef();

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(divRef.current, 'x', {
        duration: 0.8,
        ease: 'power3',
      });
      yTo.current = gsap.quickTo(divRef.current, 'y', {
        duration: 0.8,
        ease: 'power3',
      });

      gsap.to(divRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        zIndex: -10,
      });
    },
    { scope: buttonRef }
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 1,
      duration: 0.5,
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.5,
    });
  });
  const handleMouseMove = contextSafe((e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const { top, left } = rect;
    xTo.current(e.clientX - left);
    yTo.current(e.clientY - top);
  });

  return (
    <>
      <button
        ref={buttonRef}
        className="relative bg-custom-green px-5 py-2 rounded-3xl text-white overflow-hidden hover:text-custom-green
        hover:border-custom-green z-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
      >
        <div
          ref={divRef}
          className="absolute w-[250px] h-[150px] bg-white left-0 top-0 -z-10 
          pointer-events-none rounded-[50%]"
        ></div>
        <span className="font-pt-sans-bold uppercase">{children}</span>
      </button>
    </>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};
