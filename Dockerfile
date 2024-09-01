# Use an official Node runtime as the base image
FROM node:20

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /home/aranorn/dev/my-portfolio

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile


# Copy the rest of the application code
COPY . .

ENV PORT=3030

# Expose the port the app runs on
EXPOSE 3030

# Define the command to run the app
CMD ["pnpm", "dev"]