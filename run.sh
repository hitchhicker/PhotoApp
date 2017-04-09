## for OSX ##
docker run -d --net=host \
-v $(pwd)/codes:/var/www/photoApp/codes \
-v $(pwd)/logs:/var/www/photoApp/logs \
photoapp

## for Ubuntu ##
# docker run -d -p 80:80 \
# -v $(pwd)/codes:/var/www/photoApp/codes \
# -v $(pwd)/logs:/var/www/photoApp/logs \
# photoapp

echo -e "- See Nginx Server Error"
echo -e "--> tail -f logs/error"
echo -e "- See Python Error"
echo -e "--> docker logs [Container ID]"