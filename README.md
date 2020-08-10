## npm library

[https://www.npmjs.com/package/jl-rollup-ts-storybook](https://www.npmjs.com/package/jl-rollup-ts-storybook)

## reference

[typescript, rollup, storybook article](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

## Installation instructions

- git clone this repo: `git clone https://github.com/joannajjliu/jl-rollup-ts-storybook.git`
- install dependencies: `yarn install`
- initialize git: `git init`
- add components into the src folder
- when ready, compile the library: `yarn build`
- login to npm if haven't already: `npm login`
- publish build folder to npm: `npm publish`

## Preview storybook as a static webpage

- run `yarn build-storybook`
- Storybook static files will appear in /docs folder
- In this example, the /docs folder is hosted via gh-pages

## Use instructions

- run tests: `yarn run test:watch`
- run storybook (opens in port 6006): `yarn run storybook`

### Creating Components

## Generate components automatically

- run `yarn run generate {component name}`
- the generated component files will appear in /src/{component name}
- make sure to **export your new component in src/index.ts**

## Generate components manually

- Create component folders under the src folder. (ex. TestComponent, Button, Form folders)
- Inside each component folder - we'll use TestComponent for our example here:
  - Create the component: TestComponent.tsx
    - Export our component to **srx/index.ts**
  - Declare types for the component props (import into TestComponent.tsx once complete): TestComponent.types.ts
  - Create stories for the component (these will show up when you run `yarn run storybook`): TestComponent.stories.tsx
    - Import our component from **src/index.ts** file (to apply bootstrap and any global styles)
  - Create styles for the component (import these into TestComponent.tsx once complete): TestComponent.scss
  - Create tests for the component (test these using `yarn run test:watch`): TestComponent.test.tsx
- If you haven't done so already, make sure to export your component to **src/index.ts**
  - this is how other applications will be able to use our components
