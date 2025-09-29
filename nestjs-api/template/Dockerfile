# Use Node.js LTS version as base image
FROM node:22-alpine as builder

ENV NODE_ENV build

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY --chown=node:node . .

# Build the application
RUN npm run build \
    && npm prune --omit=dev

FROM node:22-alpine

ENV NODE_ENV production

# Install curl
RUN apk add --no-cache curl

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]