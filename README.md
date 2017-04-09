## Docker set-up
1. docker build -t photoapp .
2. modify run.sh
3. source run.sh
4. [Optional] source debug.sh [Debug inside in bash]
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
