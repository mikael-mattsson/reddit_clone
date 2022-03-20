import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
