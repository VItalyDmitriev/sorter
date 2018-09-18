class Sorter {

  constructor() {
    this.array = [];
    this.compare = ''
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {

    if(this.compare.length == 0){
      this.compare = this.compareNumbers;
    }

    var new_array = [];
    indices.sort(this.compareNumbers);
    for (let i = 0; i < indices.length; i++) {
      new_array.push(this.array[indices[i]]);
    }
    new_array.sort(this.compare);
    for(let i = 0; i < new_array.length; i++){
      this.array[indices[i]] = new_array[i];
    }
    return this.array;
  }

  compareNumbers(a, b) {
    return a - b;
  }

  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;