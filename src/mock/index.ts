const Mock = require('mockjs');

function init() {
    Mock.mock(
        '/api/notesbasic',
        'get',
        Array(100).fill({
            'avatar':Mock.Random.image('200x100'),
            'author':'@cname',
            'noteId':'@natural(1000,9999)',
            'likeNum':'@natural(0,9999)',
            'noteTitle':'@csentence(5, 10)'
        })
    );

    Mock.mock(
        '/login',
        'post',
        {
            username:'zhangtao25',
            age:'12',
            token:'35435434asfkajshkjgjhghgjhgjhgjghj'
        }
    );
}

export default {
    init
}
