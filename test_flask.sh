#!/bin/bash
#docker run --rm --net=host \
#-v $(pwd)/codes:/var/www/photoApp/codes \
#-v $(pwd)/logs:/var/www/photoApp/logs \
#photoapp /bin/bash -c "/etc/init.d/postgresql start; py.test -v codes/flask/test"

docker run -p 80:80 \
-v $(pwd)/codes:/var/www/photoApp/codes \
-v $(pwd)/logs:/var/www/photoApp/logs \
photoapp /bin/bash -c "/etc/init.d/postgresql start; py.test -v codes/flask/test"
