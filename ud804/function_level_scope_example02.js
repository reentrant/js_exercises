/**
JavaScript includes function level scope, which means that variables declared within a
function are only available inside that function.
*/

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
    return outsideExample;
}
console.log(example());
console.log(outsideExample);
