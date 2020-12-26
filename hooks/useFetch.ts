import axios from 'axios';
import _ from 'lodash';

export const useFetch = async ({ url, method } : { url: string, method: 'GET' | 'POST' }) => {
  let result: any;
  if (_.isEqual(method, 'GET')) {
    result = await axios.get(url, {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAOKEY}`,
      },
    });
  }
  return result;
};
