# 2023-02-03 test adéo

## Filter
Write a command-line interface in Node.js.
This program has to filter a list of elements containing a pattern.

Details:
- In the `data.ts` file, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing the pattern passed as argument (e.g. `ry`) are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

## Count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.


## How to run it

```js
yarn install
yarn start --filter=ly

# or
yarn start --count

# or
yarn build
node dist/index.js --filter=ly
```