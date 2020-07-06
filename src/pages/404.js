import React from 'react';
import Template from 'templates/Template';

const NotFoundPage = () => (
  <Template
    hero={{
      heading: 'NOT FOUND',
      paragraph: 'You just hit a route that doesn&#39;t exist... the sadness.',
    }}
  />
);

export default NotFoundPage;
