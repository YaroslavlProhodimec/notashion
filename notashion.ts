const get = (key, obj) => {
  let keys = key.split(".");

  function rekursia(keys, obj) {
    if (keys.length === 0) {
      return obj;
    }
    let key = keys.shift();

    return obj[key] ? rekursia(keys, obj[key]) : undefined;
  }

  return rekursia(keys, obj);
};

console.log(get("red.big.apple", { red: { big: { apple: "xaxa" } } }));