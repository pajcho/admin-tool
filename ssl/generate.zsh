#!/bin/zsh

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -config ./openssl-localhost.cnf \
    -sha256 \
    -days 1024
