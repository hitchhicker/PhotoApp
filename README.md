## Docker set-up
1. docker build -t photoapp .
2. ./run.sh -s [port]
3. remove container : ./run.sh -r
4. [Optional] ./run.sh -d [port]
## Debug
* OS X:
  * docker-machine ip -> get \[ip\]
  * \[ip\]:[port]
* Ubuntu:
  * localhost:[port]
## Log
* Server log
  * tail -f logs/error.log
* Flask log
  * docker logs [Container ID]
## Unit Test
* ./run.sh -t
## PostgreSQL Debug
1. ./run.sh -d [port]-> Enter into docker container
2. /etc/init.d/postgresql start
3. sudo su postgres
4. psql
5. \c photoapp -> jump to database
6. \d -> display all tables
