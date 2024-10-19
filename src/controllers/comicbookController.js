import ComicBook from '../models/comicbookModel.js';
import APIFeatures from '../utils/apiFeatures.js';

// Create a new comic book
export const createComicBook = async (req, res, next) => {
  try {
    const newComicBook = await ComicBook.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        comicBook: newComicBook
      }, message: 'Comic book created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Get all comic books
export const getAllComicBooks = async (req, res, next) => {
  try {
    const features = new APIFeatures(ComicBook.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const comicBooks = await features.query;
    const total = await ComicBook.countDocuments(features.queryObj);

    res.status(200).json({
      status: 'success',
      results: comicBooks.length,
      totalPages: Math.ceil(total / features.limit),
      currentPage: features.page,
      data: {
        comicBooks
      }, message: 'Comic books retrieved successfully'   
    });
  } catch (error) {
    next(error);
  }
};

// Get a single comic book by ID
export const getComicBook = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) {
      return res.status(404).json({
        status: 'fail',
        message: 'Comic book not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        comicBook
      }, message: 'Comic book retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Update a comic book
export const updateComicBook = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!comicBook) {
      return res.status(404).json({
        status: 'fail',
        message: 'Comic book not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        comicBook
      }, message: 'Comic book updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Delete a comic book
export const deleteComicBook = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);

    if (!comicBook) {
      return res.status(404).json({
        status: 'fail',
        message: 'Comic book not found'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

// Search comic books
export const searchComicBooks = async (req, res, next) => {
  try {
    const { query } = req.query;
    const comicBooks = await ComicBook.find({
      $or: [
        { bookName: { $regex: query, $options: 'i' } },
        { authorName: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json({
      status: 'success',
      results: comicBooks.length,
      data: {
        comicBooks
      }
    });
  } catch (error) {
    next(error);
  }
};
