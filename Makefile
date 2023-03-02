install:
	npm install

lint:
	npx stylelint ./src/scss/**/*.scss
	npx pug-lint ./src/pages/*.pug
	npx eslint ./src/js/*.js

lint-fix:
	npx stylelint ./src/scss/**/*.scss --fix

deploy:
	npx surge ./build/