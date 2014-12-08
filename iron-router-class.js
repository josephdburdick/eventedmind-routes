Articles = new Meteor.Collection('articles');

Router.route('/', function () {
  this.layout('Layout');
  this.render('Blog');
});

Router.route('/blog/new', function(){
  this.layout('Layout');
  this.render('ArticleNew');
}, {name: 'blog.new'});

Router.route('/blog/:_id', function() {
  this.layout('Layout');
  this.render('Article', {
    data: function(){
      return Articles.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'article.show'
});


if (Meteor.isClient) {
  Template.Blog.articles = function () { return Articles.find(); };
}

if (Meteor.isServer) {
 Meteor.startup(function(){
  Articles.remove({});
  for (var i = 0; i < 3; i++) {
    Articles.insert({
      title: 'Blog Article ' + i,
      body: 'This is the text body for the article I want to show.',
      createdAt: new Date,
      author: 'Joe Burdick'
    });
  };
 });
}
