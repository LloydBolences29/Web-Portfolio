import React from 'react'
import { useEffect, useRef, useState } from 'react'

const ScrollSpy = (sectionIds) => {
    const [activeId, setActiveId] = useState('')
    const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0% 0px -85% 0px",
        threshold: [0],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        if (sectionRefs.current[id]) observer.unobserve(sectionRefs.current[id]);
      });
    };
  }, [sectionIds]);

  return activeId;
}

export default ScrollSpy
