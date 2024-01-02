# Define a imagem base
FROM node:iron-bookworm-slim

# Define os argumentos passados durante o build
ARG HOST
ARG USERNAME
ARG PASSWORD
ARG DATABASE
ARG PORT

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm ci

# Copia o restante do código fonte para o diretório de trabalho
COPY . .

# Define as variáveis de ambiente usando os argumentos passados
ENV HOST=$HOST
ENV USERNAME=$USERNAME
ENV PASSWORD=$PASSWORD
ENV DATABASE=$DATABASE
ENV PORT=$PORT

# Expõe a porta em que a aplicação está ouvindo
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start"]
