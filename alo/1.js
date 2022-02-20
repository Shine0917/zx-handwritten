
var isValid = function (s) {
    const len = s.length;

    if (len % 2 !== 0) return false;
    const left = ['(', '{', '['];
    let stack = [];
    for (const i of s) {
        if (left.includes(i)) {
            stack.push(i);
        } else {
            if (match(stack[stack.length - 1], i)) {
                stack.pop(i)
            } else {
                return false;

            }
        }
    }
    return stack.length === 0

};
function match(left, right) {
    if (left === '(' && right === ')' || left === '[' && right === ']' || left === '{' && right === '}') {
        return true
    }
}

const res =isValid('()');

console.log('%c [ res ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', res)