#!/bin/bash

mkdir treino.ssh
cd treino.ssh

mkdir logs scripts backup

touch info-maquina.txt          


date > info-maquina.txt
whoami >> info-maquina.txt
hostname >> info-maquina.txt
pwd >> info-maquina.txt
cat info-maquina.txt
