# Cypress

### Docs

- Overview
  - https://docs.cypress.io/guides/overview/why-cypress
- Command Line
  - https://docs.cypress.io/guides/guides/command-line
- Assertions
  - https://docs.cypress.io/guides/references/assertions

### Running the tests

- `yarn cy:run` to execute all tests in the console
- `yarn cy:open` to open up a Cypress application and run the tests
- `yarn cy:clean` to clean all the generated files. These are cleaned on every cypress run anyways
- To run the single test suite we can use `--spec` option
  - `yarn cy:run --spec "cypress/integration/auth/**/*"` to execute all tests in the given folder
  - `yarn cy:run --spec "cypress/integration/auth/forget-password.spec.ts"` to execute only a specific test

### Optimize execution

- We can optimize test execution by running tests in parallel
  - https://github.com/tnicola/cypress-parallel

### [DRAFT] Running the tests on Netlify

- Enable `netlify-plugin-cypress` plugin for the project through Netlify dashboard
- Add this to [build.environment]

```yaml
#### START - Cypress settings
# cache Cypress binary in local "node_modules" folder so Netlify caches it
CYPRESS_CACHE_FOLDER = "./node_modules/CypressBinary"
# set TERM variable for terminal output
TERM = "xterm"
#### END - Cypress settings
```

- Add this at the bottom of the netlify.toml file

```yaml
[[context.plugins]]
# runs Cypress tests against the deployed URL
package = "netlify-plugin-cypress"
```

- To run tests on a specific branch only

```yaml
[[context."feature/add-cypress-to-netlify-build".plugins]]
# runs Cypress tests against the deployed URL
package = "netlify-plugin-cypress"
```

### [DRAFT] Running the tests on Bitbucket

- `npm install --save-dev start-server-and-test`
- Add this command to package.json

```
"cy:run:bitbucket": "START_SERVER_AND_TEST_INSECURE=0 npx start-server-and-test start https-get://localhost:4201 cy:run"
```

- We must have `package-lock.json` file in the project because bitbucket will use that
  - If not there run `npm install`
- Target specific branches: https://code-maven.com/limit-bitbucket-pipelines-to-specific-branches
- https://bitbucket.org/cypress-io/cypress-example-kitchensink/src/master/bitbucket-pipelines.yml
  - Example bitbucket pipeline `bitbucket-pipelines.yml`

```yaml
image: cypress/base:14.16.0
options:
  max-time: 10

# job definition for running E2E tests in parallel
e2e: &e2e
  name: E2E tests
  caches:
    - node
    - cypress
  script:
    - npx @bahmutov/print-env BITBUCKET
    - npm run cy:run:bitbucket
  artifacts:
    # store any generates images and videos as artifacts
    - cypress/screenshots/**
    - cypress/videos/**

pipelines:
  default:
    - step:
        name: Install dependencies
        caches:
          - npm
          - cypress
          - node
        script:
          - npm ci
          # let's see the environment variables right away
          - npx @bahmutov/print-env BITBUCKET
    - parallel:
        # run N steps in parallel
        - step:
            <<: *e2e
      # - step:
      # <<: *e2e
      # - step:
      # <<: *e2e
definitions:
  caches:
    npm: $HOME/.npm
    cypress: $HOME/.cache/Cypress
```
