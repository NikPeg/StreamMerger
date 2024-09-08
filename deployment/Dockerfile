# Use an official Python runtime as a parent image
FROM python:3.9-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Upgrade pip to current version
RUN pip3 install --upgrade pip

# Install any needed packages specified in requirements.txt
RUN pip3 install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY .. .

# Copy and set permissions for the entrypoint script
COPY deployment/entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]