.PHONY: help
help:         ## Show the help.
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep


.PHONY: clean
clean:        ## Clean unused files.
	@rm -rf build
	@rm -rf reports/ || true
	@rm -f .coverage || true


.PHONY: compile-sass
compile-sass: ## Compile SASS into CSS
	@echo "=============================="
	@echo "Compiling SASS to CSS..."
	@echo "=============================="
	@./scripts/compile_sass


.PHONY: fmt
fmt:          ## Format python code.
	@echo "=============================="
	@echo "Formatting code..."
	@echo "=============================="
	@pipenv run ruff check --fix --select I
	@pipenv run ruff format .


.PHONY: lint
lint:         ## Check code smells with Ruff
	@echo "=============================="
	@echo "Searching for code smells..."
	@echo "=============================="
	@echo
	@mkdir -p reports/lint-reports || true
	@pipenv run ruff check --exit-zero --output-format json -o reports/lint-reports/ruff.json .
	@pipenv run ruff check --exit-zero --output-format text .


.PHONY: run
run:          ## Run uvicorn
	@if [ -f .env ]; then \
		export $$(cat .env | xargs) && \
		APP_ENVIRONMENT=local gunicorn --workers=1 --bind=0.0.0.0:8080 --log-level DEBUG --threads 8 --timeout 0 src.app:app --reload; \
	else \
		APP_ENVIRONMENT=local gunicorn --workers=1 --bind=0.0.0.0:8080 --log-level DEBUG --threads 8 --timeout 0 src.app:app --reload; \
	fi


.PHONY: test
test:         ## Run tests and coverage
	@echo "=============================="
	@echo "Running unit tests..."
	@echo "=============================="
	@mkdir -p reports/tests-reports || true
	@pipenv run pytest
