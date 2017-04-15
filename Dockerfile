FROM ubuntu:14.04
MAINTAINER YU Bokai <yubokai8@gmail.com>
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y \
    gcc \
    nginx \
    build-essential python \
    python3-dev \
    python-dev \
    python3.4 \
    && rm -rf /var/lib/apt/lists/*

RUN sudo apt-get update
RUN sudo apt-get install -y python3-pip

RUN export CC=gcc

RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN sudo apt-get update
RUN sudo apt-get install -y mongodb-org
RUN mkdir -p /data/db

RUN sudo apt-get remove -y libpq5

RUN sudo apt-get install -y python3-psycopg2
RUN sudo apt-get install -y python-pip
RUN sudo apt-get install -y wget

RUN sudo apt-get install -y postgresql postgresql-contrib libpq-dev

RUN mkdir -p /var/www/photoApp
WORKDIR /var/www/photoApp
env PYTHONPATH /var/www/photoApp/codes/flask/

RUN mkdir logs
RUN mkdir codes

ADD requirements.txt .
RUN pip3 install -r requirements.txt

ADD init.sh .
ADD nginx.conf .
ADD uwsgi.ini .
ADD python34_plugin.so .
ADD photoApp.sql .

RUN sudo bash init.sh
ENV PATH /usr/bin/python3.4:$PATH:

CMD sudo /bin/bash -c "/etc/init.d/postgresql start; service nginx start; uwsgi --ini uwsgi.ini;"
