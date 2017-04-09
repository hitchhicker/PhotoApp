## Docker set-up
1. docker build -t photoapp .
2. modify run.sh
3. source run.sh/
## Debug
* OS X:
.. 1. docker-machine ip -> get [ip]
.. 2. [ip]:80
* Ubuntu:
.. localhost:80
## Server log
tail -f logs/error.log
