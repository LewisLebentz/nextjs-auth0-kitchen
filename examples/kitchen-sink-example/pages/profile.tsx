import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      <h4>Nick: {JSON.stringify(user.nickname)}</h4>      
      <h4>Nick: {user}</h4>
      <h4>Nick: {user.nickname}</h4>      
    </Layout>
  );
});
