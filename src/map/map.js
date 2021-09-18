export default function map(array, func) {
  const mapArray = [];
  array.forEach((element, index, array) => {
    mapArray.push(func(element, index, array));
  });

  return mapArray;
}
