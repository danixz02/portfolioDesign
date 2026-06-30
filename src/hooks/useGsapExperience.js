import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapExperience(rootRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title span, .hero-copy, .hero-actions', {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
      });

      gsap.to('.hero-orbit', {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: 'none',
      });

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
          },
        });
      });

      gsap.utils.toArray('.section-band').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(8% 0 8% 0)' },
          {
            clipPath: 'inset(0% 0 0% 0)',
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          },
        );
      });

      gsap.to('.parallax-soft', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-wrap',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
