#! /bin/bash

#updates ssid and pw for honeypi

ssid=$1;
pw=$2;

sudo sed -i "s/^wpa_passphrase=.*/wpa_passphrase=\"$pw\"/" /etc/hostapd/hostapd.conf;
sudo sed -i "s/^ssid=.*/ssid=\"$ssid\"/" /etc/hostapd/hostapd.conf;
