# Dockerfile
FROM node:18

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Copia os arquivos necessários
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["pnpm", "dev"]
