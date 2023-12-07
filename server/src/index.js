import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port = process.env.PORT || 4000;

mongoose.connect(
  `mongodb+srv://${process.env.ATLAS_DATABASE_USERNAME}:${process.env.ATLAS_DATABASE_PASSWORD}@cluster-course-project.vo2h3bi.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
  (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('🔴 Database error: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('✅ Database connected');
      app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
      });
    }
  },
);
