import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useFindCafeEntryByIdQuery } from '../generated/graphql';

const IndexPage = () => {
  const { data } = useFindCafeEntryByIdQuery({
    variables: {
      id: '285877418905829901',
    },
  });
  console.log('data', JSON.stringify(data, null, 2));
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
