install:
	npm install
start:
	npx babel-node src/bin/gendiff.js
publish:
	sudo npm publish --dry-run
lint:
	npx eslint .
test:
	npm test --watch
test-coverage:
	npm test --watch --coverage
	