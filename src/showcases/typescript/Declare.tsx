// https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/MYewdgzgLgBAlmAVgU2LAvDAFABwE4hQgBcMAhmAJ4A0MYZAtsqQAoE7J5SUDSylAShjoAfDADeAKBgwA8gCMUaAHQATZADMEyNiA5dKuAkVr0mtKTJkBzZFCxDLVmXjsBXPGBgBGAAwBuaSsAX2og4IFA4MDJSWAAGzIICBgAEVRE1wkggAEEJSggnDd5eLhgGHUEsizXMlVweMoYCE4AN3LmcioYmVBIKDw3NBA8BwlgyUm48Gg0gFEAYQAZAEEAJXmAfQRoCmBkYTpkAHc0jJrkBxj+iBB45GV4kGssVKW1zZ2B-cfWvA6B0ikiAA

// Simulates our decorator
const inject = (proto: any, name: PropertyKey) => {
  Object.defineProperty(proto, name, {
    get() {
      return 10;
    },
  });
};

class WithoutDeclare {
  @inject
  public readonly service: any;

  constructor() {
    // Here is called Object.defineProperty and sets the value to undefined (overriding the decorator value)
  }
}

const WITHOUT_instance = new WithoutDeclare();

// Prints undefined
console.log(WITHOUT_instance.service);

class Declare {
  @inject
  public declare readonly service: any;

  constructor() {}
}

const DECLARE_instance = new Declare();

// Prints 10
console.log(DECLARE_instance.service);
