import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';

export default withPageAuthRequired(function Profile({ user }) {
  console.log('user is', user['nickname']);
  console.log('test');
  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{user['nickname']}</pre>
    </Layout>
  );
});
