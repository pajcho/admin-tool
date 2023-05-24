import { login } from '../commands/login';

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}
