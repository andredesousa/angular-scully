# Pre-rendering Angular web sites with Scully

[Scully](https://scully.io/) is a static site generator for Angular projects looking to embrace the [Jamstack](https://jamstack.org/).
It is an alternative to [pre-rendering static pages](https://angular.io/guide/prerendering) with Angular Universal.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Overview

[Jamstack](https://jamstack.org/) is an architecture designed to make the web faster, more secure, and easier to scale.
The core principles of pre-rendering enable sites and applications to be delivered with greater confidence and resilience than ever before.

[Scully](https://scully.io/) makes building, testing and deploying Jamstack apps extremely simple.
It will use your application and will create a static `index.html` for each of your pages/routes.
Each and every `index.html` will have the content already there, and this will make your application show instantly for the user.
Also, this will make your application very SEO friendly.

The entire frontend is prebuilt into highly optimized static pages and assets during a build process.
This process of pre-rendering results in sites which can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `build` - Builds the dist files.
- `scully` - Builds the static files.
- `scully:serve` - Serves the static files.
- `release` - Builds a Docker image of the app.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.

Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](coverage/index.html) file in your web browser.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use your IDE for debugging units.
Also, you can debug tests with `debugger` keyword if you run `npm run test:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
These functionalities are provided natively or based on plugins.

## Build and deployment

Before Scully can run you need to build your Angular project with `npm run build` command.
The build artifacts will be stored in the `dist/angular-app` directory.
After Angular project is built, use `npm run scully` to pre-render your static site using Scully.

In `docker` folder you can find a Dockerfile and [Nginx](https://www.nginx.com/) configuration file.
Use `npm run release` command to generate the Docker image of this application.
After, you can start the application via:

```bash
docker run -d -p 8080:8080 angular13
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
