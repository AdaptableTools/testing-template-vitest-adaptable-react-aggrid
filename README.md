# AdapTable React Vitest Example Setup

This is a very basic example of a setup with [Vite](https://vite.dev/) & [Vitest](https://vitest.dev/). For a proper support template on how to use AdapTable with React, please refer to the [AdapTable React Template](https://github.com/AdaptableTools/support-template-adaptable-react-aggrid).

AdapTable React is the React Framework version of AdapTable - the market-leading, low-code AG Grid extension from AdapTable Tools.

For full information on how to use AdapTable React see the [AdapTable Documentation](https://docs.adaptabletools.com/guide/react-overview).

## Versions and Dependencies

The demo is built using these key packages:

- [AdapTable](https://docs.adaptabletools.com/) version 22
- [AG Grid](https://www.ag-grid.com) version 33.x
- [React](https://react.dev/) version 18

## Contents

This template contains just the bare bones required to set up an AdapTable instance with [Vitest](https://vitest.dev/).

There are 3 important issues we fixed in this template:
 - `vitest` requires ESM imports to include the file extension, so we had to install the [`extensionless`](http://npmjs.com/package/extensionless) node module loader, since Adaptable (and probably most of your other dependencies) does not include the file extension in its internal imports. See the `test` script in `package.json`.
 - `vitest` does not correctly read the `module` field in the `package.json` of Adaptable, so we had to use `patch-package` to fix this issue and patch `@adaptabletools/adaptable-react-aggrid` with the following lines in package.json

```json 
+ "exports": {
+   ".": "./src/index.js"
+ }
```
- `vitest` requires certain dependencies to be inlined during testing. We configure this using the `server.deps.inline` option to handle AdapTable's imports correctly. See [Vitest Server Dependencies Configuration](https://vitest.dev/config/#server-deps) for more details:

```typescript
server: {
  deps: {
    inline: [/@adaptabletools\/adaptable/],
  }
}
```

## Using patch-package

This project uses [patch-package](https://www.npmjs.com/package/patch-package) to modify the `@adaptabletools/adaptable-react-aggrid` package to work correctly with Vitest.

To make changes to a package:

1. Make the required changes in `node_modules/@adaptabletools/adaptable-react-aggrid/package.json`
2. Run `npx patch-package @adaptabletools/adaptable-react-aggrid` to create a patch file
3. The patch will be saved in the `patches` directory

The patches are automatically applied after `npm install` through the `postinstall` script in `package.json`.


## Installation

Run `npm install` (or `yarn`), depending on what tool you're using.

## Running for development

Execute the following command

```sh
$ npm run start
```

## Running the tests

Execute the following command

```sh
$ npm run test
```

See `App.test.tsx` for an example test.


## Licences

An [AdapTable Licence](https://docs.adaptabletools.com/guide/licensing) provides access to all product features as well as quarterly updates and enhancements through the lifetime of the licence, comprehensive support, and access to all 3rd party libraries.

Licences can be purchased individually, for a team, for an organisation or for integration into software for onward sale.

We can make a Trial Licence available for a short period of time to allow you to try out AdapTable for yourself.

Please contact [`sales@adaptabletools.com`](mailto:sales@adaptabletools.com) for more information.

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Documentation](https://docs.adaptabletools.com).  

Here you can see a large number of AdapTable demos each showing a different feature, function or option in AdapTable.

## Demo

To see AdapTable in action visit our [Demo Site](https://www.adaptabletools.com/demos) which contains a few larger demos.

## More Information

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com).
 
## Support

For all support enquiries please [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).
