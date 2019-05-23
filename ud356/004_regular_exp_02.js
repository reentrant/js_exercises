function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    let re = /^(Mrs*|Ms|Dr|Er)\.[^\.]+$/;
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar();
let string01 = 'Dr.Er.'
console.log(!!string01.match(re));
string01 = 'Mrs.Y'
console.log(!!string01.match(re));
