# Schema performance comparison

This compares the performance for cleaning and validating for [simple-schema](https://github.com/aldeed/simple-schema-js/), [faster-schema](https://github.com/sebakerckhof/faster-schema) and [superstruct](https://github.com/ianstormtaylor/superstruct/) on a big object with a complex nested schema.

Superstruct has no real cleaning method, so only the validation is tested.

## run

```
npm install
node index
```