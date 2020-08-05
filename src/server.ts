import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 

//corpo(Request: Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar: '/users/:id'
// Query Params: user?page=2&sort=name // paginacao, filtros e listas

// app.post('/users', (request, response) => {
// console.log(request.body);
// console.log(request.params);
// console.log(request.query);
//     const users = [
//         { name: 'Diego', age: 25 },
//         { name: 'Vini', age: 21 },
//     ]
//     return response.json(users);
// });

app.listen(3333);