import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function DocSearchLogo(props) {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div className='logo'>
      <img src={withBaseUrl('img/assets/icon-512.png')} />
      <span>FlashPixel</span>
    </div>
  );
}

export default DocSearchLogo;
