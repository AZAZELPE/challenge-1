import { Router } from 'express';
import { getUrl } from '../url';

const router = Router();

router.get('/:shortedUrl', async (req, res) => {
  const { shortedUrl } = req.params;

  const result = await getUrl({ id: shortedUrl });

  res.json(result);
});

export default router;
