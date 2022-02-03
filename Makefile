PROJECT_DATA_DIR=$(shell pwd)

DOCKER_CONTAINER_IMAGE=cl00e9ment/node.js-builder
DOCKER_CONTAINER_IMAGE_SHELL=sh

DOCKER_CONTAINER_NAME=$(shell basename $(PROJECT_DATA_DIR))-node

DOCKER_RUN_EXTRA_ARGS=
DOCKER_RUN_EXTRA_ARGS_DEV=-p 1234:1234
DOCKER_RUN_EXTRA_ARGS_BUILD=

define spawn = 
docker run \
	--rm \
	--name $(DOCKER_CONTAINER_NAME) \
	-u node \
	-w /code \
	-v $(PROJECT_DATA_DIR):/code \
	$(1) \
	-it $(DOCKER_CONTAINER_IMAGE) \
	$(DOCKER_CONTAINER_IMAGE_SHELL) $(2)
endef

clear:
	rm -rf ./.parcel-cache ./packages/webextension/dist

attach:
	docker exec \
		-it $(DOCKER_CONTAINER_NAME) \
		$(DOCKER_CONTAINER_IMAGE_SHELL)

sh:

	if [ $(shell docker ps -q --filter "name=$(DOCKER_CONTAINER_NAME)" | wc -l) -gt 0 ] ; then \
		clear -x; \
		make attach ;\
	else \
		clear -x; \
		$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_DEV)) ;\
	fi

dev:
	$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_DEV),-c "pnpm install && pnpm run dev")

build:
	make clear
	$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_BUILD),-c "pnpm install && pnpm run build")

stop:
	docker stop $(DOCKER_CONTAINER_NAME)