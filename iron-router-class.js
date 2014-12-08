Router.route('/', function () {
  var isLoggedin = Session.get('isLoggedIn');
  
  this.layout('AppLayout');

  if (isLoggedin){
    this.render('Home');
  } else {
    this.render('Login');
  }
});

if (Meteor.isClient) {
  
}

if (Meteor.isServer) {
 
}
