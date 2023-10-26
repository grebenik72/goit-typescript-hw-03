class Key{
    private signatute: number;
    constructor() {
        this.signatute = Math.random();
    }
    getSignature(): number{
        return this.signatute;
    }
}

class Person {
    constructor(private key : Key) {
       }
    getKey(): Key {
        return this.key;
    }
}
abstract class House {
  protected door: boolean;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
    this.door = false;
  }
  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};