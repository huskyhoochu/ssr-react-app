import React from 'react';
import { Helmet } from 'react-helmet';

export const Home: React.FC = () => (
  <div>
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <p>This is Home page.</p>
  </div>
);

export const About: React.FC = () =>  (
  <div>
    <Helmet>
      <title>About page</title>
    </Helmet>
    <p>This is About page.</p>
  </div>
);
