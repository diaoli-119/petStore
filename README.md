# petStore
Start the project
1. Please change "petstore/src/jest.config" to "petstore/src/jest.config.js", because Gmail cannot email .js file. I don't know what causes the proble. I have to change the name to "jest.config".

2. Install packages with "npm install" or "yarn add". "npm install" is recommended;

3. Start the server with "yarn sun dev", if you prefer live reloading in real time;

4. or create routes and build files with "yarn run tsoa routes" and "yarn run tsc --outDir build --experimentalDecorators" respectively. And then use command "yarn start" to start the server without live reloading;

5. Now input "http://localhost:3000/petStore/" in a web browser after the server started, you will see the swagger page which is based on the configure file "swagger.json". Then you can check the APIs.

Test the project
1. I use "@types/jest" to test the code. Use command "yarn test" to start test process. All the test files are saved in "petstore/test/src".

2. All the APIs with "@types/jest" are tested, all passed.