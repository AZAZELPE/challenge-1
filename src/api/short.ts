import { Router } from 'express';
import { shortUrl } from '../url';

const router = Router();

router.post('/short', async (req, res) => {
  const { url } = req.body;
  const result = await shortUrl({ url });

  res.json(result);
});

export default router;
