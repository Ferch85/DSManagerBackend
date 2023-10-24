import  express  from "express";
import usersRoutes from './routes/users.routes.js'
import cusTomersRoutes from './routes/customers.routes.js'
import indexRoutes from './routes/index.routes.js'
import registros from './routes/registros.routes.js'
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '10mb' }));


app.use(cors());
app.use('/api',indexRoutes);
app.use('/api',usersRoutes);
app.use('/api', cusTomersRoutes);
app.use('/api', registros);




app.listen(3001)
console.log('Server Running on port 3001');