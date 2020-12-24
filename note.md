# commands

_npm run build_

_npm run start_

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
