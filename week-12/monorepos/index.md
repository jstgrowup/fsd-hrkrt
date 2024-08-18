1. make a commong folder
2. initialize an empty project and typescript
3. update the package json update the name to username/common than update the main to whereever the index file is stored in our case its dist
4. put the logic in the index.ts
5. `npm publish --access=public` to publish
6. when it gets published we dont need the typescript files to get published for that we will use .npmignore file
7. you have to run the publish command again and now you will get an error ` You cannot publish over the previously published versions: 1.0.0.` for this you have to update the version and publish again using `npm publish`
