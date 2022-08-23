interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  animalArr: Animal[] = [];
  enqueue(name: string, type: "cat" | "dog"): void {
    const newAnimal: Animal = {
      name: name,
      type: type

    }
    this.animalArr.push(newAnimal);
  }

  dequeue(type?: "cat" | "dog"): string {
    let savedAnimal: any;
    if (this.animalArr.length === 0) {
      throw new Error('it is empty');
    }
    // If no type is given (type === undefined), return the next animal.
    if (type === undefined) {
      savedAnimal = this.animalArr.shift()?.name;
      return savedAnimal;
      // If the type is given, return the next animal of a type.
    } else {
      for (let i = 0; i < this.animalArr.length; i++) {
        if (this.animalArr[i].type === type) {
          return this.animalArr.splice(i, 1)[0].name;
          // savedAnimal = this.animalArr[i].name;

        }
      }
      return savedAnimal;
    }
    // TODO(you);
  }
}
