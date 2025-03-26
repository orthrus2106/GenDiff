install:
	@echo "Installing..."
	npm ci
	npm link
	@echo "Done! Package installed as global package"
publish:
	@echo "Publishing..."
	npm publish --dry-run
lint:
	@echo "Linting..."
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage