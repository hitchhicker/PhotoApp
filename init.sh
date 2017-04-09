#!/bin/bash
rm /etc/nginx/sites-enabled/default
rm /etc/nginx/sites-available//default
sudo ln -s /var/www/photoApp/nginx.conf /etc/nginx/sites-enabled/
