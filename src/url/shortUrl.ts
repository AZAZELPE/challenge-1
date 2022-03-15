import nodeShortUrl from './nodeShortUrl';
import { insertUrl } from '../repository/url';
import { crawlWebTitle } from '../crawlWebTitle';

const shortUrl = async ({ url }) => {
  const id = await nodeShortUrl({ url });
  const title = await crawlWebTitle({ url });

  await insertUrl({ id, url });

  return { id, url, title };
};

export default shortUrl;
