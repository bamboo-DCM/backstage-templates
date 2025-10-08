FROM python:3.11-slim

# Definir diretório de trabalho
WORKDIR /dev

# Copiar arquivos de dependências
COPY requirements.txt ./

# Instalar dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o restante do código
COPY . .

# Comando para manter o container vivo rodando seu main.py
CMD ['tail', '-f', '/dev/null']