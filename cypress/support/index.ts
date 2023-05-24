import 'cypress-localstorage-commands';
import { login } from './commands/login';

Cypress.Commands.add('login', login);
