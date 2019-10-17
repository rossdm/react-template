
## About

This is a lightly-opinionated starter template for React using current idioms.

It includes a number of optional libraries that might be used in a typical project:

* [Typescript](https://www.typescriptlang.org/)
* [axios](https://github.com/axios/axios)
* [log-level](https://github.com/pimterry/loglevel)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-testing-library](https://github.com/testing-library/react-testing-library)

## Getting started
Clone this project, then:

```
rm -rf .git
```

Rename the project and author in `package.json`, then good to go!

Based on [Create React App](https://github.com/facebook/create-react-app) using [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Linting

See `eslintrc.json` for lint rules. Linting is done on `git commit` via [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

You can run linting manually via:

```
npm run lint
```
or

```
npm run lint:fix
```

## Other things you'll need

When your project gets bigger you'll probably want to add [react-router](https://reacttraining.com/react-router/web/guides/quick-start).

For more advanced state management, use [Redux](https://react-redux.js.org/introduction/quick-start) for general state and [Context](https://reactjs.org/docs/context.html) for globals.

You'll find it easier to compose prototypes using a component library such as [Ant Design](https://ant.design/docs/react/introduce) or [Material UI](https://material-ui.com/). I'd prefer something like Ant since Material UI uses some unfamiliar UX patterns for [dropdowns](https://material-ui.com/components/selects/). If you use Ant make sure [your build stays optimized](https://github.com/ant-design/babel-plugin-import). If you choose something else, research your strategy for overriding the framework styles using your CSS solution ([styled-components](https://github.com/styled-components/styled-components), [Emotion](https://emotion.sh/docs/introduction), etc.).