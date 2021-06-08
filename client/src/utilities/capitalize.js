const capitalize = (s) => {
  let edittedString;
  if (typeof s !== "string") {
    return "";
  }
  // If string is a sentence
  edittedString = s.trim();
  if (edittedString.indexOf(" ") > 0) {
    const stringArr = [];
    edittedString.split(" ").map((word) => {
      return stringArr.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return stringArr.join(" ");
  }
  // If string is a word

  edittedString = s.trim().toLowerCase();
  return edittedString.charAt(0).toUpperCase() + edittedString.slice(1);
};

export default capitalize;
