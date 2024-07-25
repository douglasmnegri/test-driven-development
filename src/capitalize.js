const capitalize = (str) => {
  if (str.length == 0) return;
  let lowerCaseStr = "";
  for (let i = 1; i < str.length; i++) {
    lowerCaseStr += str[i].toLowerCase();
  }
  return str[0].toUpperCase().concat(lowerCaseStr);
};

module.exports = capitalize
