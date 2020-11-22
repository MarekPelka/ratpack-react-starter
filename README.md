Needed dependencies:
- Java 11
- node.js min v10.18.1
- npm min 6.13.4
- by default works on Linux, to run it on windows remove "./" from "start:backend": "./gradlew run --continuous" in root package.json - needs to be corrected in the future

How to run in development mode:
1) From root of the project run command: npm install
2) npm start - this will start two goals in parallel - "cd src/main/frontend && npm start" and "./gradlew run --continuous"
3) If you want to have CEIDG mock, run command: npm json-server

===Connecting to H2 database===<br>
From InteliJ Open Database section -> Data source -> H2 -> Change connection type to URL only and enter URL from hibernate.cfg.xml jdbc:h2:conexusdb;AUTO_SERVER=TRUE
user sa, password empty

===json-server===<br>
lightweight fake REST API which by design support filtering, paging, sorting etc, may be useful for dummy APIs
It was added for now to package.json, by default in watch mode. To run it type npm run json-server
Example of request which is using "LIKE" operator: http://localhost:3000/ceidg?company_like=better
For more examples please check: https://github.com/typicode/json-server#static-file-server
