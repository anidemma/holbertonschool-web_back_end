export default function createInt8TypedArray(length, position, value) {
    const buff = new ArrayBuffer(length);
    const int8arr = new Int8Array(buff);
    if (position > length) {
      throw Error('Position outside range');
    } else {
      int8arr[position] = value;
    }
    return new DataView(buff);
  }
  