1. make a commong folder
2. initialize an empty project and typescript
3. update the package json update the name to username/common than update the main to whereever the index file is stored in our case its dist
4. put the logic in the index.ts
5. `npm publish --access=public` to publish
6. when it gets published we dont need the typescript files to get published for that we will use .npmignore file
7. you have to run the publish command again and now you will get an error ` You cannot publish over the previously published versions: 1.0.0.` for this you have to update the version and publish again using `npm publish`
8. now when you import the package you will get an error like `Could not find a declaration file for module '@jstgrwup/common'. 'e:/harkirat/week-12/monorepos/server/node_modules/@jstgrwup/common/dist/index.js' implicitly has an 'any' type.
Try `npm i --save-dev @types/jstgrwup\_\_common`if it exists or add a new declaration (.d.ts) file containing`declare module '@jstgrwup/common';``
9. this is because we dont have the declaration file for the types only types not the logic it ends with `.d.ts` it just gives us the types of the code , for that we have to do some changes in the tsconfig file and add the `declaration=true` this will create a .d.ts file in the dist folder
