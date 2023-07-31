# Define a imagem base
FROM node:18

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante do código fonte para o diretório de trabalho
COPY . .

# Expõe a porta em que a aplicação está ouvindo
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start"]
