type Element = {
  id?: number,
  name: string
};

const list: Element[] = [
  {name: 'name1'},
  {name: "name2"}
];

console.log('Original list')
console.log(list);

// map operation returns a new list
const mapList: Element[] = list.map((element, index) => {
  return {id: index, name: element.name} as unknown as Element;
});

console.log('map (new list)')
console.log(mapList);

//forEach operation mutates existing list
list.forEach((element, index) => {
  element.id = index;
});
console.log('forEach (Mutated Original list)')
console.log(list);
