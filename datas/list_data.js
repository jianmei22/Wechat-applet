let content = [{
  blog: '前端开发，jQuery的api总结，可以到我的github看一下：https://github.com/jianmei22，祝你学有所成，天天进步'  
    },
  {
    blog: '前端知识体系：http://www.cnblogs.com/sb19871023/p/3894452.html 前端免费书籍：https://github.com/vhf/free-programming-books'
  },
  {
    blog: 'bootstrap总结，首先要看官网文档https://www.bootcss.com/'
  },

]
let list_data = [{
    date: 'June 16 2019',
    blog_img: '/images/one.jpg',
    avatar: '/images/index.jpg',
  key_word: '前端开发jQuery的api总结',
    blog_content: content[0].blog,
    view_icon: 66,
    love_icon: 88,
    blogId: 0,
  },
  {
    date: 'July 6 2019',
    blog_img: '/images/two.jpg',
    avatar: '/images/index.jpg',
    key_word: '前端学习网站分享',
    blog_content: content[1].blog,
    view_icon: 66,
    love_icon: 68,
    blogId: 1,
  },
  {
    date: 'July 16 2019',
    blog_img: '/images/three.jpg',
    avatar: '/images/index.jpg',
    key_word: 'bootstrap学习',
    blog_content: content[2].blog,
    view_icon: 66,
    love_icon: 68,
    blogId: 2,
  },
]
// 暴露对象
module.exports = {
  list_data,
  content
};