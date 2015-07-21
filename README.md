node-typescript-basic-app
=========================

1. Fork this repo
2. Run `npm install` to install node dependencies and generate JavaScript files
3. Run `npm start` to start the app (access via `http://localhost:3000`)

## Compiling TypeScript

From the command line, execute `gulp` and then you can execute `npm start` to start the app.

## Typings

All typings are included in the repository. If you need to add a new typing you can do so from the command line.

```
tsd query name-of-module --action install --save
```

If you don't have `tsd` installed, you can install it globally with `npm install -g tsd`.

You can find more information on the [DefinitelyTyped](http://definitelytyped.org/) website.
