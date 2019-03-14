import Mock from 'mockjs'

function getRImg() {
    return Mock.Random.image('400x400', Mock.Random.hex())
}
Mock.mock('/news/index','get', {
    'list|5': [{
        'empid|1-5':5,
        'id':"@id",
        'src': getRImg(),
        'url': '/employmentClass/detail',
        'title': '@ctitle(5, 10)',
        'desc': '@ctitle(20,30)',
        'step': {
            steptotal: '@integer(2,4)',
            timetotal: '@integer(1,300)',
            peopletotal: '@integer(1,200000)'
        }

    }]
})
Mock.mock('/news/index','post', {
    'list|5': [{
        'empid|1-5':5,
        'id':"@id",
        'src': getRImg(),
        'url': '/employmentClass/detail',
        'title': '@ctitle(5, 10)',
        'desc': '@ctitle(20,30)',
        'step': {
            steptotal: '@integer(2,4)',
            timetotal: '@integer(1,300)',
            peopletotal: '@integer(1,200000)'
        }

    }]
})
