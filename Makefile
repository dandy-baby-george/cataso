.PHONY: up down exec-backend exec-db build

up:
	docker compose up -d 
down:
	docker compose down
exec-backend:
	docker compose exec backend /bin/sh
exec-db:
	docker compose exec db /bin/sh
build:
	docker compose build --no-cache
