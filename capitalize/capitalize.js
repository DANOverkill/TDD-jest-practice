function capitalize(string) {
  let firstLetter = string[0];
  return `${firstLetter.toUpperCase()}${string.slice(1)}`;
}

export default capitalize;
