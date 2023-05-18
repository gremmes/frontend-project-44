instal: 
		npm ci

brain-games: 
		node bin/brain_games.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .