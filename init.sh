#!/bin/bash
rm /etc/nginx/sites-enabled/default
rm /etc/nginx/sites-available//default
sudo ln -s /var/www/photoApp/nginx.conf /etc/nginx/sites-enabled/
/etc/init.d/postgresql start
sudo -u postgres bash -c "psql -c \"CREATE USER admin WITH PASSWORD 'pass';\""
sudo -u postgres bash -c "psql -c \"CREATE DATABASE photoapp \""