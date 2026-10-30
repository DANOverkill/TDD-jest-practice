function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("parameter must be a string");
  } else {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }
}

export default capitalize;
