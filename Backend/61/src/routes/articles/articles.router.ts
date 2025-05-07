import express from 'express';
import { renderArticleId, renderArticles } from './articles.controller';

const router = express.Router();

router.get('/render', renderArticles);
router.get('/render/:id', renderArticleId);

export default router;
