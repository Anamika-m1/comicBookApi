import express from 'express';
import * as comicBookController  from '../controllers/comicbookController.js';
const router = express.Router();

router.post('/', comicBookController.createComicBook);
router.get('/', comicBookController.getAllComicBooks);
router.get('/search', comicBookController.searchComicBooks);
router.get('/:id', comicBookController.getComicBook);
router.put('/:id', comicBookController.updateComicBook);
router.delete('/:id', comicBookController.deleteComicBook);

export default router;
