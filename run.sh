## for OSX ##
docker run -d --net=host \
-v $(pwd)/codes:/var/www/photoApp/codes \
-v $(pwd)/logs:/var/www/photoApp/logs \
photoApp

## for Ubuntu ##
# docker run -d -p 80:80 \
# -v $(pwd)/codes:/var/www/photoApp/codes \
# -v $(pwd)/logs:/var/www/photoApp/logs \
# photoApp
