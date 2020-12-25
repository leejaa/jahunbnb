import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useFindCafeEntryByIdQuery } from '../generated/graphql';

const IndexPage = () => {
  const { data } = useFindCafeEntryByIdQuery({
    variables: {
      id: '285877418905829901',
    },
  });
  console.log(data);
  const deferredPrompt = useRef(null);
  const installApp = () => {
    if (!deferredPrompt.current) return false;
    // 홈화면의 추가를 실행시킨다
    deferredPrompt.current.prompt();
    // 실행 후 유저가 설치를 했는지 안했는지를 알 수 있다
    deferredPrompt.current.userChoice.then((choiceResult) => {
      // 설치 했을 때
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
      // 설치 하지 않았을 때
        console.log('User dismissed the A2HS prompt');
      }
    });
  };
  useEffect(() => {
    console.log('Listening for Install prompt');
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });

    // 설치가 되어있다면 버튼은 숨긴다
    if (!deferredPrompt.current) {
      // return dispatch({
      //   type: 'HIDE_BUTTON',
      // });
    }
    // 버튼을 보여줌
    // dispatch({
    //   type: 'SHOW_BUTTON',
    // });
  }, []);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <button onClick={installApp}>앱 다운로드</button>
    </Layout>
  );
};

export default IndexPage;
