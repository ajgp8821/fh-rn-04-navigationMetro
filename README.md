# Navigation App - Metro

## Table of Contents

- [Navigation App - Metro](#navigation-app---metro)
  - [Table of Contents](#table-of-contents)
  - [1. Create Metro Project](#1-create-metro-project)
  - [2. Install React Navigation](#2-install-react-navigation)
  - [3. Install Stack Navigator](#3-install-stack-navigator)
  - [4. Install Drawer Navigator](#4-install-drawer-navigator)
  - [5. Install Bottom Tab Navigator](#5-install-bottom-tab-navigator)
  - [6. Install Material Bottom Tab Navigator](#6-install-material-bottom-tab-navigator)
  - [7. Install Material Top Tab Navigator](#7-install-material-top-tab-navigator)
  - [9. Install React Native Vector Icons](#9-install-react-native-vector-icons)
    - [Android](#android)
      - [Option: With Gradle (recommended)](#option-with-gradle-recommended)

## 1. Create Metro Project

- Run:
  - `$ npx react-native init navigationMetro --template react-native-template-typescript`

## 2. Install React Navigation

<https://reactnavigation.org/docs/getting-started>

- Run:
  - `$ npm install @react-navigation/native`
  - `$ npm install react-native-screens react-native-safe-area-context`
  - `$ npx react-native run-android --port=8088 --verbose`

## 3. Install Stack Navigator

<https://reactnavigation.org/docs/stack-navigator>

- Run:
  - `$ npm install @react-navigation/stack`
  - `$ npm install react-native-gesture-handler`
  - `$ npm install @react-native-masked-view/masked-view`

## 4. Install Drawer Navigator

<https://reactnavigation.org/docs/drawer-navigator/>

- Run:
  - `$ npm install @react-navigation/drawer`
  - `$ npm install react-native-gesture-handler react-native-reanimated`

## 5. Install Bottom Tab Navigator

<https://reactnavigation.org/docs/bottom-tab-navigator/>

- Run:
  - `$ npm install @react-navigation/bottom-tabs`

## 6. Install Material Bottom Tab Navigator

<https://reactnavigation.org/docs/material-bottom-tab-navigator/>

- Run:
  - `$ npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons`

## 7. Install Material Top Tab Navigator

<https://reactnavigation.org/docs/material-top-tab-navigator/>

- Run:
  - `$ npm install @react-navigation/material-top-tabs react-native-tab-view`
  - `$ npm install react-native-pager-view`

## 9. Install React Native Vector Icons

<https://github.com/oblador/react-native-vector-icons>

- Run:
  - `$ npm install --save react-native-vector-icons`
  - `$ npm i --save-dev @types/react-native-vector-icons`

### Android

#### Option: With Gradle (recommended)

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

To customize the files being copied, add the following instead:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
