isDocker := $(shell docker info > /dev/null 2>&1 && echo 1)
user := $(shell id -u)
group := $(shell id -g)

ifeq ($(isDocker), 1)
	ifneq ($(isProd), 1)
		dc := USER_ID=$(user) GROUP_ID=$(group) THEME=$(theme) docker-compose
		dcimport := USER_ID=$(user) GROUP_ID=$(group) docker-compose -f docker-compose.import.yml
		de := docker-compose exec
		dr := $(dc) run --rm
		drtest := $(dc) -f docker-compose.test.yml run --rm
	endif
endif

.DEFAULT_GOAL := help
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build-docker
build-docker:
	$(dc) create
	$(dc) pull --ignore-pull-failures
	$(dc) build php
	make dev

.PHONY: dev
dev: node_modules/time ## Lance le serveur de développement
	$(dc) up

.PHONY: build
build: ## Build la librairie
	$(node) npm run build

.PHONY: publish
publish: ## Publie la librairie
	$(node) npm publish ./dist --access public

.PHONY: login
login: ## Publie la librairie
	$(node) npm login

.PHONY: doc
doc: ## Génère le sommaire de la documentation
	npx doctoc ./README.md

# -----------------------------------
# Dépendances
# -----------------------------------

node_modules/time: yarn.lock
	npm install --save --legacy-peer-deps
	touch node_modules/time