import { compose, pipe } from "lodash/fp";

let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// 以下三种方法有相同效果
// const result = wrapInDiv(toLowerCase(trim(input)));
// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input));
