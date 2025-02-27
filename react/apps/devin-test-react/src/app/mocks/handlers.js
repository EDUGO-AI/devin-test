import { rest } from 'msw';

export const handlers = [
  rest.get('/api/lessons', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          student: {
            name: 'August Smith',
            email: 'august.smith@gmail.com',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          duration: '30 minutes',
          status: 'Confirmed by trainer',
          dateTime: {
            date: '23 Dec, 2024',
            time: 'Mon, 12:45'
          },
          languages: {
            from: 'English',
            to: 'German'
          }
        }
      ])
    );
  }),
  
  rest.post('/api/lessons', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: 'new-lesson-id',
        student: req.body.student,
        duration: req.body.duration,
        status: 'Pending confirmation',
        dateTime: req.body.dateTime,
        languages: req.body.languages
      })
    );
  })
];
