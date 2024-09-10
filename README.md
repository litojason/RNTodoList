<div align='center'>
    <img alt='React Native Todo List Logo' src='/src/assets/logo/logo.png' style='width:80px;height:80px;' />
</div>

# React Native Todo List (RNTodoList)

Todo mobile app built with Typescript, React Native.

## Figma Design

- Presentation View (Prototype): [Jason Todo List's Prototype](https://www.figma.com/proto/dnRwbCMKbBE4yX5sqPA38z/Jason-Todo-List?node-id=6-2&node-type=canvas&t=664cINrl9uBSWrY6-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A3&starting-point-node-id=6%3A2&show-proto-sidebar=1)
- Dev Mode Link: [Jason Todo List's Dev Mode](https://www.figma.com/design/dnRwbCMKbBE4yX5sqPA38z/Jason-Todo-List?node-id=2-3&t=9SyEGpmqIBX8MDwP-1)

<div style='display:grid;gap:16px 16px;grid-template-columns: auto auto;'>
    <img src="/src/assets/figma/screen1.png">
    <img src="/src/assets/figma/screen2.png">
    <img src="/src/assets/figma/component1.png">
    <img src="/src/assets/figma/component2.png">
</div>

## API Used In This Project

- Node Sequelize Todo: [node-sequelize-todo](https://github.com/litojason/node-sequelize-todo)

## Additional Dependencies

Please refer to `package.json`.

- [React Navigation](https://reactnavigation.org/): routing and navigation (Native Stack, Drawer)
- [React Hook Form](https://react-hook-form.com/): manage forms
- [yup](https://www.npmjs.com/package/yup): validation
- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons): customizable vector icons
- [react-native-config](https://www.npmjs.com/package/react-native-config): handle config variables
- [axios](https://www.npmjs.com/package/axios): promise based HTTP client

## Installation

    git clone https://github.com/litojason/RNTodoList.git

    cd RNTodoList

    yarn

    yarn pod

## Setup Env

Create 2 (or more) new files: `.env.development`, `.env.production`. Please copy example below or refer to `.env.sample` file.

    API_URL=https://sample.com
    ENV=development

## Run

```bash
# Start
yarn start

## Open in other terminal after yarn start
# Development environment
# Android
yarn android:dev
# iOS
yarn ios:dev

# Production environment
# Android
yarn android:prod
# iOS
yarn ios:prod
```
