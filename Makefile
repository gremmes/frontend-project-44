instal: 
		npm ci

brain-games: 
		node bin/brain-games.js

brain-even:
		node bin/games/brain-even.js

brain-calc:
		node bin/games/brain-calc.js

brain-gcd:
		node bin/games/brain-gcd.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .