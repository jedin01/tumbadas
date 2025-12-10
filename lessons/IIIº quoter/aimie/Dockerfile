# Stage 1: Build the application
FROM node:18-slim AS builder

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

FROM node:18-slim

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app /app

# Create a non-root user for security
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "./server.js"]