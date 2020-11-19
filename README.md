npm install
npm start

===Connecting to H2 database===
From InteliJ Open Database section -> Data source -> H2 -> Change connection type to URL only and enter URL from hibernate.cfg.xml jdbc:h2:conexusdb;AUTO_SERVER=TRUE
user sa, password empty

===json-server===
lightweight fake REST API which by design support filtering, paging, sorting etc, may be useful for dummy APIs
It was added for now to package.json, by default in watch mode. To run it type npm run json-server
Example of request which is using "LIKE" operator: http://localhost:3000/ceidg?company_like=better
For more examples please check: https://github.com/typicode/json-server#static-file-server

TODO:

