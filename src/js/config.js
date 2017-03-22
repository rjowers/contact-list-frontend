function Config ($stateProvider, $urlRouterProvider) {
  // console.log($stateProvider);
  // console.log($urlRouterProvider);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.tpl.html',
      controller: 'AllContactsController'
    })
    .state('contact-new', {
      url: '/contacts/new',
      templateUrl: 'templates/contact-add.tpl.html',
      controller: 'ContactAddController'
    })
    .state('contact',{
      url: '/contacts/contact/:id',
      templateUrl:'templates/contact.tpl.html',
      controller: 'SingleContactController',
    })
    // .state('shelter', {
    //   url: '/shelters',
    //   template: `<h1>Shelters are cool cause animals are cool.</h1>`
    // })
    // .state('page-not-found', {
    //   url: '/not-found',
    //   template: `<h2>No such page. Haha. You're dumb.</h2>`
    // });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
};

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
