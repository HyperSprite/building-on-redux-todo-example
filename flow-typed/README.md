#Getting started with Flow type checking

>This TL;DR assumes you already have Node and NPM installed.
>For the official guide, check the blogpost [here](https://flowtype.org/blog/2016/10/13/Flow-Typed.html)

>Paths are reletive to this repo, asjust to your liking.

##Install flow
First, install **Flow** and **Flow-CLI**
```npm install -g flow-bin flow-typed```

Flow-bin provides binaries for Flow on Mac/Win/Lin.
Flow-typed is a CLI tool for adding type definitions to projects.

##To add Flow types to a project
Create a new ```.flowconfig``` in the same folder as your package.json. Inside add the following text:
```bash
[ignore]
<PROJECT_ROOT>/node_modules/fbjs/.*

[libs]
<PROJECT_ROOT>/flow-typed/interface.js
```

```interface.js``` is our project interface file for declaring types. Once you add it here, as long as the file is to ```// @flow``` it will check to see if the types exist here before issuing an error.

Install ```flow-bin``` into your project:
```npm install --save-dev flow-bin```
Now run:
```npm install```
```flow-typed install```
This adds type definition files based on what is in the package.json file.

If you are linting with eslint, you can add ```eslint-plugin-flowtype``` as one of your plugins as well.

also see this cheetsheet http://www.saltycrane.com/blog/2016/06/flow-type-cheat-sheet/
