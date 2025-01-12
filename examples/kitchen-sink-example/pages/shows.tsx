import React from 'react';

import useApi from '../lib/use-api';
import Layout from '../components/layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// import { useUser } from '@auth0/nextjs-auth0';

console.log('test message');

type TVShow = { show: { name: string } };

// export function Profile() {
//   const { user } = useUser();
//   console.log({ user });
//   return { user };
// }

// Profile();
// const x = Profile();
// console.log(x);

// const user = useUser();
// console.log(user);

export default withPageAuthRequired(function TvShows(): React.ReactElement {
  const { response, error, isLoading } = useApi('/api/shows');

  return (
    <Layout>
      <h1>TV Shows</h1>

      {isLoading && <p>Loading TV shows...</p>}

      {response && (
        <>
          <p>My favourite TV shows:</p>
          <pre>
            {JSON.stringify(
              response.shows.map((s: TVShow) => s.show.name),
              null,
              2
            )}
          </pre>
        </>
      )}

      {error && (
        <>
          <p>Error loading TV shows</p>
          <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
});
