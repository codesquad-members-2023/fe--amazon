import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  // req : request, res: response, ctx : context
  rest.get('/todos', (request, response, context) => {
    return response(context.status(200), context.json(todos));
  }),

  // 할일 추가
  rest.post('/todos', (request, response, context) => {
    todos.push(request.json);
    return response(context.status(201));
  }),
];
