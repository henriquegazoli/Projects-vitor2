#!/bin/bash

mkdir -p /root/treino-ssh
cd /root/treino-ssh

mkdir -p logs scripts backup

touch info-maquina.txt


date > info-maquina.txt
whoami >> info-maquina.txt
hostname >> info-maquina.txt
pwd >> info-maquina.txt
cat info-maquina.txt
