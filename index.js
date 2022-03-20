/* eslint-disable no-console */
import 'dotenv/config';
import throng from 'throng';
import app from './app.js';

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 4000;

const start = () => {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err, 'Cannot start server');
      process.exit(1);
    } else {
      console.log(`Server started, listening on port ${PORT}`);
    }
  });
};

throng({
  worker: start,
  count: WORKERS,
  lifetime: Infinity,
});
