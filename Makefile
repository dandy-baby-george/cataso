.PHONY: up down exec build

up:
	docker compose up -d 
down:
	docker compose down
exec-backend:
	docker compose exec backend /bin/sh
build:
	docker compose build
