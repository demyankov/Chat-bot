
start:
	docker compose -f docker-compose.yaml up -d --build

stop:
	docker compose -f docker-compose.yaml down

update:
	make stop && git reset --hard && git pull origin prod && make start

destroy:
	docker compose -f docker-compose.yaml down -v && docker system prune -af
