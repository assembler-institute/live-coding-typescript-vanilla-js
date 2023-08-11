# live-coding-typescript-vanilla-js

`#fundamentals-ii` `#html` `#css` `#javascript` `#typescript` `#assembler-institute-of-technology` `#master-in-software-engineering`

# TypeScript Live Coding Session <!-- omit in toc -->

In this session we will learn how to install and configure a project with vanilla javascript and typescript

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Instructions](#instructions)
- [Extra steps 💯](#extra-steps-)
- [Requirements](#requirements)
- [License](#license)

## Getting Started

Create a new project in VSCode and install TypeScript globally with npm:

```bash
$ npm install -g typescript
```
Now initialize your typescript project with:
```bash
$ tsc -init
```
This command has created our typescript configuration file, now we have to edit some values so we can start working with vanilla js. We will go to the tsconfig.json and edit/add/uncomment some values.

The first two are for specifying what syntax to use when the files are compiled to Javascript, we will work with native browser most compatible version, ES6. 
```bash
"target": "ES6"
"module": "ES6"
```
With rootDir we set our main ts scripts folder and with outDir we set where the js files will be transpiled
```bash
"rootDir": "./src"
"outDir": "./dist"
```
Finally we set to true noEmitOnError so no files are transpiled if there's an error
```bash
"noEmitOnError": true
```
> [!WARNING]  
> You must run the project in a local server like when using [Visual Code Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer "Install Visual Code Live Server Extension") or you might get CORS error when importing files.

## Instructions

We want to make a fetch request to the [Rick & Morty API](https://rickandmortyapi.com/ "Rick & Morty API") so we can get the first page of characters. We have to use import and export and make use of interfaces to get the character data, including enums when it's possible.


### Step 1

We'll create a Character.ts script inside ./src/types and code the interface needed for the character data. 

### Step 2

A main.ts script is needed so when the document is loaded a fetch request is made. Then create a container for each character data that will contain its name and image. 

### Step 3

When we click on a character container, the character id must be written in the console with a console.log.

## Extra steps 💯

- Add styles to the character containers.
- Try to modularize your code as much as possible in functions.


## Requirements

- Use import and export
- Use an interface for the data and enums for the data attributes that fit this data type.


## License

Licensed under the [MIT License](./LICENSE).
