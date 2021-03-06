


import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

import AllContactsController from './controllers/allcontacts';
import ContactAddController from  './controllers/contact';
import SingleContactController from './controllers/single-contact';

angular
  .module('contact-app', ['ui.router'])
  .config(AppConfig)
  .controller('AllContactsController', AllContactsController)
  .controller('ContactAddController', ContactAddController)
  .controller('SingleContactController', SingleContactController);
