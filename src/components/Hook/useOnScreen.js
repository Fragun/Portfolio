// useOnScreen.js
import { useState, useEffect } from 'react';

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
console.log('====================================');
console.log(isIntersecting);
console.log('====================================');
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 } // Lorsque l'élèment est visible à 50%
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default useOnScreen;
