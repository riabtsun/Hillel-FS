import { Request, Response } from 'express';
import articlesData from '../../mock/MOCK_ARTICLES';

export const renderArticles = async (_req: Request, res: Response) => {
  try {
    return res.render('articles', { articlesList: articlesData });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const renderArticleId = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const articlesList = articlesData.find(
      (article) => article.id === Number(id)
    );
    if (!articlesList) {
      res.status(404).json({ message: 'Article not found' });
    }
    return res.render('articles', { articlesList });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
