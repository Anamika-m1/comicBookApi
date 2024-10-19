import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/database.js';
import errorHandler from './src/middleware/errorHandler.js';
import comicBookRoutes from './src/routes/comicbookRoute.js';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/comic-books', comicBookRoutes);
// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});