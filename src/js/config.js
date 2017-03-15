function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/index.html',
      // controller: 'ShelterController'
    })
    .state('contact-new', {
      url: '/contacts/new',
      templateUrl: 'templates/contact-add.tpl.html',
      // controller: 'ShelterController'
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
