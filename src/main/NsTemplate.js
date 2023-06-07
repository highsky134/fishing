import React, { useEffect, useRef } from 'react';

import './scss/NsTemplate.scss';
import { NsHeader } from './NsHeader';
import NsMain from './NsMain';
import NsFootter from './NsFootter';

const NsTemplate = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerHeight = header.offsetHeight;

      if (prevScrollPos > currentScrollPos) {
        // 스크롤을 올릴 때
        header.style.top = '0';
      } else {
        // 스크롤을 내릴 때
        if (currentScrollPos > headerHeight) {
          header.style.top = `-${headerHeight}px`;
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id='header' ref={headerRef}>
        <NsHeader />
      </div>

      <div id='main'>
        <NsMain />
      </div>

      <div id='footer'>
        <NsFootter />
      </div>
    </div>
  );
};

export default NsTemplate;