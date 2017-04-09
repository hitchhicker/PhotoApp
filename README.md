## Docker set-up
1. docker build -t photoapp .
2. modify run.sh
3. source run.sh
## Debug
* OS X:
  * docker-machine ip -> get \[ip\]
  * \[ip\]:80 
* Ubuntu:
  * localhost:80
## Server log
tail -f logs/error.log
