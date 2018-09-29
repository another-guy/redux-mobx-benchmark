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
cd packages/common-types
json-server -p 3001 src/test-employee-list.json
```

`HTTP GET http://localhost:3001/employees`

### Launch the package of interest

```sh
cd packages/redux-only-demo             # or
cd packages/mobx-demo                   # or
cd packages/mobx-state-tree-demo        # or
cd packages/mobx-state-tree-legacy-demo

npm run start
```
