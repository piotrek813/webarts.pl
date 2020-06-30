import React from 'react';
import Template from 'templates/Template';
import Section from 'components/Section';

import sec1Svg from 'images/undraw_gatsbyjs.svg';
import sec2Svg from 'images/undraw_online_page.svg';

const IndexPage = () => (
  <Template>
    <Section
      center
      h="Some sort of heading"
      p="In consequat eget senectus turpis facilisis ac justo feugiat. Ipsum quisque at eget scelerisque at eu urna. Venenatis lectus laoreet nulla sagittis, consequat. Donec quisque feugiat nibh vel id proin turpis. Id blandit lacus morbi at in commodo euismod consequat."
    />
    <Section
      color="light"
      h="Super wydajne strony z gatsby’im"
      p="Nibh adipiscing ornare tortor viverra elementum commodo in. Diam pellentesque at nec nisi ut eget pharetra curabitur. Urna aliquam morbi euismod facilisi at posuere nisl. Tortor velit tortor, et nec, pellentesque id sit. Morbi velit in hac eget et aliquet."
      img={sec1Svg}
    />
    <Section
      color="dark"
      h="Very intersting things"
      p="Nibh adipiscing ornare tortor viverra elementum commodo in. Diam pellentesque at nec nisi ut eget pharetra curabitur. Urna aliquam morbi euismod facilisi at posuere nisl. Tortor velit tortor, et nec, pellentesque id sit. Morbi velit in hac eget et aliquet."
      img={sec2Svg}
    />
  </Template>
);

export default IndexPage;
