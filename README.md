[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Welcome to the Admin Tool repository :wave:

## Demo link
:point_right: You can view a Github Pages demo [HERE](https://pajcho.github.io/admin-tool/) :point_left:

## Important notes:
- This is a **demo** Angular application. 
- All **API requests are mocked**.
- All **API responses are faked** using faker library

## Install :satellite:

After you have cloned this repo, you need to install all npm dependencies. In this repo, we use yarn as our npm client. It is an improved version of npm. If you don't have yarn follow this guide [https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install).

Now that you have yarn, run the following command:

```sh
$ yarn install
```

This is optional, but it is useful to the angular CLI installed globally. You can install it the following way:

```sh
$ yarn global add @angular/cli
```

## Starting the dev server :construction:

Given you have the angular CLI setup globally, you can run the next command to launch a dev server that watches your changes.

### CI (Dev) API (Default)

```sh
$ yarn start
```

### Local API

Primarily used by backend developers.

```sh
$ yarn start:local
```

## Lint :mag_right:

We currently have ESLint setup. It's a useful tool to highlight potential errors in your code. You can run it manually this way:

```sh
$ yarn lint
```

## Branch conventions

Our branch convention is to start with the ticket number, then append task and then your branch name, like this:

```text
<ticket-number>/task/awesome-feature
```

## EditorConfig Editor Integration

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

### Visual Studio Code

To use EditorConfig with Visual Studio Code, you will need to install a (EditorConfig for VS Code)[https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig].

### JetBrains WebStorm

JetBrains WebStorm comes bundled with native support for EditorConfig. Everything should work.

### Other Editors

See official (Editor Integration)[https://editorconfig.org/#download] document.

## Prettier Editor Integration

Prettier is an opinionated code formatter.

### Visual Studio Code

To use Prettier with Visual Studio Code, you will need to install a (Prettier - Code formatter)[https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode].

### JetBrains WebStorm

See the (WebStorm setup guide)[https://prettier.io/docs/en/webstorm.html].

### Other Editors

See official (Editor Integration)[https://prettier.io/docs/en/editors.html] document.

## ESLint Editor Integration

ESLint is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code to make code more consistent and avoid bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

### Visual Studio Code

To use ESLint with Visual Studio Code, you will need to install a (ESLint)[https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint].

### JetBrains WebStorm

To use ESLint with JetBrains WebStorm, you will need to install a (ESLint)[https://plugins.jetbrains.com/plugin/7494-eslint].

### Other Editors

See official (Editor Integration)[https://eslint.org/docs/user-guide/integrations] document.

## Stylelint Editor Integration

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

### Visual Studio Code

To use stylelint with Visual Studio Code, you will need to install a (stylelint)[https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint].

### JetBrains WebStorm

Version 2016.3 onwards has built-in support for stylelint. You can find more details (here)[https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-4830-stylelint-usages-for-default-exports-and-more/].

### Other Editors

See official (Editor Integration)[https://stylelint.io/user-guide/integrations/editor] document.

## Jest Editor Integration

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- **Developer Ready**: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.
- **Instant Feedback**: Fast, interactive watch mode only runs test files related to changed files.
- **Snapshot Testing**: Capture snapshots of large objects to simplify testing and to analyze how they change over time.

### Visual Studio Code

To use Jest with Visual Studio Code, you will need to install a (Jest)[https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest].

### JetBrains WebStorm

JetBrains WebStorm comes bundled with native support for run Jest tests and see the results right in the IDE. Everything should work.

## Additional Editor Configuration

### Visual Studio Code

Project recommended extensions are defined here `.vscode/extensions.json`. VS Code prompts a user to install the recommended extensions when a project is opened for the first time.

And to enable format on save with **EditorConfig** and **Prettier**, please include the following settings in VS Code:

```
  "editor.formatOnSave": true,
```

To enable **Auto-Fix** on save for **ESLint** and **Stylelint**, please include the following settings in VS Code:

```
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
```

To open your user and workspace settings, use the following VS Code menu command:

- On Windows/Linux - **File > Preferences > Settings**
- On macOS - **Code > Preferences > Settings**

### JetBrains WebStorm

To configure project structure, right-click `src`folder in the Project tool window, select **Mark Directory as** from the context menu, and then select **Resource Root** category.

And double-check if the following settings are enabled:

- _Languages and Frameworks > JavaScript > Code Quality Tools > ESLint_ - **Automatic ESLint configuration** and **Run eslint --fix on save**
- _Languages and Frameworks > JavaScript > Prettier_ - **Run for files:** `{**/*,*}.{ts,scss,html,json,md}` and **On save**
- _Languages and Frameworks > Style Sheets > Stylelint_ - **Enable**

To open project Settings Preferences dialog, use the following WebStorm menu command:

- On Windows/Linux - **File > Settings**
- On macOS - **WebStorm > Preferences**

## Modules and index.ts

The `index.ts` itself is a file that re-exports selected exports of other inner files. In this way, we'll rollup exports from several modules (features, sections, groups, etc.) into a single, convenient place.

To reduce long or multiple imports, please always use `index.ts` to export all inner children used in parent.

## Setup trusted SSL certificate in local

The browser doesn't trust our certificate by default, since we generate certificate manually. We have to make sure the browser trusts our certificate, so we need to install it on our local machine.

### Chrome insecure localhost flag

Please ensure that you have **disabled** the following experimental flag in Chrome: **Allow invalid certificates for resources loaded from localhost.**

URL: [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost)

If you're using any other browser, please double-check similar settings.

Important to say that [Chrome had deprecated support for commonName matching in certificates](https://groups.google.com/a/chromium.org/g/security-dev/c/IGT2fLJrAeo), in effect, requiring a `subjectAltName` since January 2017. You can found more details.

### macOS (Catalina)

1. Double click on the certificate [server.crt](ssl/server.crt)
2. Select your desired keychain (login should suffice)
3. Add the certificate
4. Open **Keychain Access** if it isn't already open
5. Select the keychain you chose earlier
6. You should see the certificate **localhost** in the list
7. Double click on the certificate
8. Expand **Trust**
9. Select the option **Always Trust** in _When using this certificate_
10. Close the certificate window

### Windows (Windows 10)

1. Double click on the certificate [server.crt](ssl/server.crt)
2. Click on the button **Install Certificate ...**
3. Please select whether you want to store it on user level or machine level
4. Click **Next**
5. Select **Place all certificates in the following store**
6. Click **Browse**
7. Select **Trusted Root Certification Authorities**
8. Click **Ok**
9. Click **Next**
10. Click **Finish**
11. If you get a prompt, click **Yes**

### Linux (Ubuntu, Debian, OpenSUSE, SLES)

1. Copy [server.crt](ssl/server.crt) to dir `/usr/local/share/ca-certificates/`
2. Use command: `sudo cp ssl/server.crt /usr/local/share/ca-certificates/localhost.crt`
3. Update the CA store: `sudo update-ca-certificates`

After these steps, the new CA is known by system utilities like curl and get (you can confirm this step with the command: `curl https://localhost:4201`). Unfortunately, this does not affect most web browsers like Google Chrome or Mozilla Firefox in the Linux environment.

### Linux (Fedora, RHEL, CentOS)

1. Convert [server.crt](ssl/server.crt) to `localhost.pem`
2. Use command: `openssl x509 -in server.crt -out localhost.pem`
3. Copy `localhost.pem` to dir `/etc/pki/ca-trust/source/anchors/`
4. Use command: `sudo cp localhost.pem /etc/pki/ca-trust/source/anchors/`
5. Update the CA store: `sudo update-ca-trust`

After these steps, the new CA is known by system utilities like curl and get (you can confirm this step with the command: `curl https://localhost:4201`). Unfortunately, this does not affect most web browsers like Google Chrome or Mozilla Firefox in the Linux environment.

### Google Chrome Manage Certificates

Depending on the operating system, Chrome uses the system-wide certificates (macOS, Windows) or certificates of its own scope (Linux).

In case it uses its own certificates, you can add a root certificate to Chrome by executing the following steps.

In Chrome settings (chrome://settings)[chrome://settings], search for _certificates_ and click on **Manage Certificates**.

Here you can import the localhost.pem file at the Trusted Root Certification Authorities tab.

Under the **Authorities** tab, click **Import** to start the certificate installation process.

### Testing and confirmation of setup

After these steps, the localhost certificate is known by the system. And you should be able to run project from local with HTTPS.

### Troubleshooting

If you still see **Your connection is not private** message in Chrome (or a similar statement in other browsers), please double-check your local documentation how you can install and trust [server.crt](ssl/server.crt) self-signed certificate in your specific system (the system that is not listed above).

## Unit Test Generator

We included a unit test generator for components, directives, services, pipes, and functions, which will generate way more than half of your unit test.

Usage example: `$ yarn test:generate src/app/my.component.ts`
This will generate a unit test here: `src/app/my.component.spec.ts`

Additional notes:

- we're using `*.spec.ts` instead of `*.test.ts` as a file extension for unit tests
- please use **Jasmine/Mocha** API (syntax): `describe()`, `it()`, etc. in unit tests
- please remove `// tslint:disable`
- in some cases you will need to add `StoreModule.forRoot({})`
- `async` is deprecated, please use `waitForAsync()`
- `TestBed.get` is deprecated, please use `TestBed.inject`. This new method has the same behavior but is type-safe

To see generated examples, please take a look at the examples directory: [https://github.com/allenhwkim/ngentest/tree/master/examples](https://github.com/allenhwkim/ngentest/tree/master/examples)

## Useful Links

**Development Tools**

- [Git](https://git-scm.com/)

**Documentation**

- [Angular](https://angular.io/docs)
  - [Angular CLI](https://cli.angular.io/)
  - [Angular Coding Style Guide](https://angular.io/guide/styleguide)
  - [Angular Checklist](https://angular-checklist.io/projects)
  - [Angular Material](https://material.angular.io/components/categories)
  - [Angular Testing](https://angular.io/guide/testing)
    - [Jest (Unit Testing)](https://jestjs.io/)
    - [Cypress (End-to-End Testing)](https://www.cypress.io)
- [NgRx](https://ngrx.io)
  - [@ngrx example application](https://github.com/ngrx/platform/tree/master/projects/example-app)
- [RxJS](https://rxjs.dev)
  - [RxJS Operator Decision Tree](https://rxjs.dev/operator-decision-tree)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  - [TypeScript](https://www.typescriptlang.org/)
- [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
  - [Sass](https://sass-lang.com)
- [Compodoc](https://compodoc.app/)
