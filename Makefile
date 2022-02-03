PROJECT_DATA=$(shell pwd)
DOCKER_CONTAINER_NAME=ava-pro-node
DOCKER_CONTAINER_IMAGE=cl00e9ment/node.js-builder
DOCKER_CONTAINER_IMAGE_SHELL=sh

clear-cache:
	find . -maxdepth 1 -type d -name .parcel-cache -exec rm -rf {} \+
	rm -rf packages/webextension/dist

attach:
	docker exec -it $(DOCKER_CONTAINER_NAME) $(DOCKER_CONTAINER_IMAGE_SHELL)

sh:
	docker run --rm --name $(DOCKER_CONTAINER_NAME) -v $(PROJECT_DATA):/srv -w /srv -p 1234:1234 -u node -it $(DOCKER_CONTAINER_IMAGE) $(DOCKER_CONTAINER_IMAGE_SHELL)

dev:
	docker run --rm --name $(DOCKER_CONTAINER_NAME) -v $(PROJECT_DATA):/srv -w /srv -p 1234:1234 -u node -it $(DOCKER_CONTAINER_IMAGE) $(DOCKER_CONTAINER_IMAGE_SHELL) -c "pnpm install && pnpm run dev"

build:
	make clear-cache
	docker run --rm --name $(DOCKER_CONTAINER_NAME) -v $(PROJECT_DATA):/srv -w /srv -u node -it $(DOCKER_CONTAINER_IMAGE) $(DOCKER_CONTAINER_IMAGE_SHELL) -c "pnpm install && pnpm run build"

stop:
	docker stop $(DOCKER_CONTAINER_NAME)