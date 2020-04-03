/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

let history;
export const registerNav = ref => {
  history = ref.history;
};

const jumpTo = uri => {
  history.push(uri);
};
export const go = uri => {
  history.go(uri);
};
export default jumpTo;
