const fastify = require('fastify')();
const path = require('path');
const questions = [{
  caption: 'Подія натискання на елемент називається click?',
  correctAnswer: true
},

];

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
});

fastify.get('/api/questions', (request, reply) => {
  reply.send(questions);
});

fastify.post('/api/check-answers', (request, reply) => {
  const userAnswers = request.body;
  let correctCount = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      correctCount++;
    }
  }

  reply.send({ correctCount, totalQuestions: questions.length });
});

const startServer = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server started on port 3000');
  } catch (err) {
    console.error('Error starting server', err);
    process.exit(1);
  }
};

startServer();