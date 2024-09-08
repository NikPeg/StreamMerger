# Variables
DOCKER_COMPOSE = docker-compose -f deployment/compose.yaml
PROJECT_NAME = stream-merger

.PHONY: up build down clean logs

# Build Docker images
build:
	@echo "Building Docker images..."
	$(DOCKER_COMPOSE) build

# Start containers
up: build
	@echo "Starting Docker containers..."
	$(DOCKER_COMPOSE) up -d

# Stop containers
down:
	@echo "Stopping Docker containers..."
	$(DOCKER_COMPOSE) down

# View logs
logs:
	@echo "Fetching Docker logs..."
	$(DOCKER_COMPOSE) logs -f

# Clean up resources
clean: down
	@echo "Removing Docker images and volumes..."
	$(DOCKER_COMPOSE) down --volumes --rmi all

# Restart services
restart: down up
	@echo "Restarting Docker services..."

# Remove orphaned containers
prune:
	@echo "Removing orphaned containers..."
	docker container prune -f

# Run Django migrations
migrate:
	@echo "Running Django migrations..."
	$(DOCKER_COMPOSE) run --rm web python manage.py migrate

# Collect static files
collectstatic:
	@echo "Collecting static files..."
	$(DOCKER_COMPOSE) run --rm web python manage.py collectstatic --noinput
