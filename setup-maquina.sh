#!/bin/bash

mkdir treino-ssh

cd treino-ssh
mkdir logs script backup

touch info-maquina.txt

echo date >> info-maquina.txt
echo "Hostname: $(hostname)" >> info-maquina.txt
echo "IP Address: $(hostname -I)" >> info-maquina.txt
echo pwd >> info-maquina.txt



