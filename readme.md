# README

## Install

```sh
npm install -g lerna     # If Lerba is not installed globally already

lerna bootstrap
```

## Build

```sh
lerna run build
```

## Running

### JSON as a fake service

```sh
json-server src/test-employee-list.json
```

`HTTP GET http://localhost:3001/employees`