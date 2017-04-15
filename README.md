## Docker set-up
1. docker build -t photoapp .
2. modify run.sh
3. source run.sh
4. remove container : source rmd.sh
5. [Optional] source debug.sh [Debug in bash]
## Debug
* OS X:
  * docker-machine ip -> get \[ip\]
  * \[ip\]:80 
* Ubuntu:
  * localhost:80
## Log
* Server log
  * tail -f logs/error.log
* Flask log
  * docker logs [Container ID]
## Unit Test
* Backend: source test_flask.sh
## PostgreSQL Debug
1. source debug.sh -> Enter into docker container
2. /etc/init.d/postgresql start
3. sudo su postgres
4. psql
5. \c photoapp -> jump to database
6. \d -> display all tables
