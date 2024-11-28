export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const fullString = [];

  for (const str of set) {
    if (str.startsWith(startString)) {
      fullString.push(str.slice(startString.length));
    }
  }

  return fullString.join('-');
}
