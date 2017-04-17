if [ ! -z "$2" ]
then
    port=$2
else
    port=80
fi
if [ $1 == "-s" ]
    # server
then
    #docker run -d --net=host \
    #-v $(pwd)/codes:/var/www/photoApp/codes \
    #-v $(pwd)/logs:/var/www/photoApp/logs \
    #photoapp
    docker run -d -p $port:$port \
    -v $(pwd)/codes:/var/www/photoApp/codes \
    -v $(pwd)/logs:/var/www/photoApp/logs \
    photoapp
    echo -e "- See Nginx Server Error"
    echo -e "--> tail -f logs/error"
    echo -e "- See Python Error"
    echo -e "--> docker logs [Container ID]" 
elif
    # test falsk
    [ $1 == "-t" ]
then
    docker run \
    -v $(pwd)/codes:/var/www/photoApp/codes \
    -v $(pwd)/logs:/var/www/photoApp/logs \
    photoapp /bin/bash -c "/etc/init.d/postgresql start; py.test -v codes/flask/test"
elif [ $1 == "-d" ]
    # debug
then
    docker run --rm -p $port:$port \
    -v $(pwd)/codes:/var/www/photoApp/codes \
    -v $(pwd)/logs:/var/www/photoApp/logs -ti photoapp /bin/bash
elif [ $1 == "-r" ]
then
    # remove
    docker rm -f $(docker ps -a -q)
elif [ $1 == "-h" ]
then
    echo '-s: [server] lauch server'
    echo '-t: [test]   flask unit test'
    echo '-d: [debug]  enter docker container'
    echo '-r: [remove] remove all containers'
    echo '-s [port] / -d [port]: specify a port otherthan 80'
else
    "Unknown argument run.sh -h to see more."
fi