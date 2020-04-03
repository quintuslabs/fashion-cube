/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

export default state => {
  let result = "";
  let order = "";
  let department = "";
  let range = "";
  for (let name in state) {
    // order filter
    if (name === "order") {
      let temp = "";
      for (const v of state[name]) {
        temp = v;
      }
      if (temp.toUpperCase() === "ASCENDING") {
        order = "order=price";
      }
      if (temp.toUpperCase() === "DESCENDING") {
        order = "order=-price";
      }
    }
    // department filter
    if (name === "department") {
      let _base_str = "";
      if (state[name].length > 1) {
        _base_str = "&department=";
      } else {
        _base_str = "department=";
      }
      for (let d of state[name]) {
        department += _base_str + d.charAt(0).concat(d.slice(1).toLowerCase());
      }
    }
    // price filter
    if (name === "price") {
      let _price_str_arr = [];
      for (let p of state[name]) {
        if (p.match(/less/i)) {
          p = p.replace(/[\D]+/i, "0 - ");
        }
        if (p.match(/greater/i)) {
          p = p.replace(/[\D]+/i, "").concat(" - 999");
        }
        _price_str_arr = _price_str_arr.concat(p.match(/[\d]+/g));
      }
      // sort the array
      let sorted_matched_arr = _price_str_arr.sort(function(a, b) {
        return a - b;
      });
      // remove duplicates
      for (let index = 0; index < sorted_matched_arr.length; index++) {
        if (sorted_matched_arr[index] === sorted_matched_arr[index + 1]) {
          sorted_matched_arr.splice(index, 2);
          index--;
        }
      }
      // generate price range string
      for (let index = 0; index < sorted_matched_arr.length; index++) {
        if (index % 2 === 0) {
          if (range) {
            range += `&range=${sorted_matched_arr[index]}-${
              sorted_matched_arr[index + 1]
            }`;
          } else {
            range += `range=${sorted_matched_arr[index]}-${
              sorted_matched_arr[index + 1]
            }`;
          }
        }
      }
    }
  }
  if (range) {
    result += range;
  }
  if (order) {
    if (result) {
      order = `&${order}`;
    }
    result += order;
  }
  if (department) {
    if (result) {
      department = `&${department}`;
    }
    result += department;
  }
  // console.log(result);
  return result;
};
