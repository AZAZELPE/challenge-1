import * as shortUrl from 'node-url-shortener';

const nodeShortUrl = ({ url }) =>
  new Promise((res, rej) => {
    shortUrl.short(url, (err, result) => {
      if (err) {
        rej(err);
      }
      res(result);
    });
  });

export default nodeShortUrl;
