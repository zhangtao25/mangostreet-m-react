const Mock = require('mockjs');

function randomH(x: number, y: number) {
  let random = Math.floor(Math.random() * (y - x) + x)
  return random
}

let arr: Array<any> = [];

for (let i = 0; i < 15; i++) {
  arr.push({
    'avatar': Mock.Random.image(`58x58)}`),
    'author': '@cname',
    'noteId': '@natural(1000,9999)',
    'likeNum': '@natural(0,9999)',
    'noteTitle': `@csentence(${randomH(13, 15)}, ${randomH(20, 25)})`,
    'noteCover': Mock.Random.image(`500x${randomH(500, 800)}`)
  })
}

function init() {
  Mock.mock(
    '/api/notesbasic',
    'get',
    arr
    // Array(10).fill({
    //     'avatar':Mock.Random.image('58x58'),
    //     'author':'@cname',
    //     'noteId':'@natural(1000,9999)',
    //     'likeNum':'@natural(0,9999)',
    //     'noteTitle':'@csentence(5, 10)',
    //     'noteCover':Mock.Random.image('500x800')
    // })
  );

  Mock.mock(
    '/login',
    'post',
    {
      username: 'zhangtao25',
      age: '12',
      token: '35435434asfkajshkjgjhghgjhgjhgjghj'
    }
  );
}

export default {
  init
}
