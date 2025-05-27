# Etapa de build
FROM node:20-alpine AS builder

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia o restante dos arquivos
COPY . .

# Build da aplicação
RUN npm run build

# Etapa de produção
FROM node:20-alpine AS runner

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários da etapa de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exposição da porta
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
