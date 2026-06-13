## PDF2Reviewer
Got PDF from tons of reports from school? Want easy way to generate test questionnaires while being interactive while looking similar to test paper layouts?

### Why design it simple?
Green markers, borders, animations, whatnot. It's such a waste of congnitive space for learning when you can just bold = correct and text-red-500 into incorrect in the most natural way (test-paper wise) possible.



## How to run on your machine

### How to run on Linux with Docker
```sh
docker compose -f npm-mysql-pma.yml up -d
```

### How to run on Windows Machine

##### Required Dependencies:
- NodeJS
- MySQL (not necessary for now since it doesn't use database atm)

```bash
npm install
npm run dev -H [your host address] -p [your port]
```
