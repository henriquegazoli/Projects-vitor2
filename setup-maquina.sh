#!/bin/bash

mkdir -p /root/treino-ssh
cd /root/treino-ssh

mkdir -p logs scripts backup

{
  echo "Data e hora: $(date)"
  echo "Usuário: $(whoami)"
  echo "Máquina: $(hostname)"
  echo "Diretório atual: $(pwd)"
} > info-maquina.txt
