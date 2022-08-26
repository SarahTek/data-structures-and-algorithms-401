interface Animal {
  name: string;
  type: "cat" | "dog";
}
export class Shelter {
  animalArr: Animal[] = [];

  enqueue(name: string, type: "cat" | "dog"): void {
    const newAnimal: Animal = {
      name: name,
      type: type,
    }
    this.animalArr.push(newAnimal);
  }
  dequeue(type?: "cat" | "dog"): any {
    if (this.animalArr.length === 0) {
      throw Error("Queue is empty..");
    } else {
      if (this.animalArr.length) {
        for (let i = 0; i < this.animalArr.length; i++) {
          if (this.animalArr[i].type === type) {
            return this.animalArr.splice(i, 1)[0].name;
          }
        }
      }
      if (type === undefined) {
        return this.animalArr.shift()?.name;
      }
    }
  }
}
