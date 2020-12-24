# commands

> npm run build
> npm run start

# currying

> functionA(argumentA)(argumentB)(argumentC)

```javascript
function functionA(argumentA) {
  return functionB(argumentB)(argumentB) {
    return functionC(argumentC){
      ....
    }
  }
}
```
