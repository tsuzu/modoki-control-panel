DOCKER_IMAGE_NAME = tsuzu/modoki-control-panel

SRCS = $(wildcard *.go)
DIST = $(wildcard dist/*)

.PHONY: all build
all:  docker

docker: $(SRCS) $(DIST) Dockerfile
	docker build -t $(DOCKER_IMAGE_NAME) .

