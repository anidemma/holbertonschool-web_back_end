export default function cleanSet(set, startString) {

  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const full_string = [];

  for (const str of set) {
    if (str.startsWith(startString)) {
        full_string.push(str.slice(startString.length));
    }
  }

  return full_string.join('-');
}
