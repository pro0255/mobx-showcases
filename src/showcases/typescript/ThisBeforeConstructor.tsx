// Matej Bransky credit
// https://angular.schule/blog/2022-11-use-define-for-class-fields/

// https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/MYGwhgzhAEAqAWBLCAhApgMwPYCc0GEsA7CAFxwFdhTdoBvAKGmgAcKAjERYaDRHMgDkwAWzQBuJqw5ceENMGIATYWMlTFJclRo4AFAEp6U5qSQQAdHwGlVaaAF5oAIgBqWAFakwzyc1PmFvKaKqL2Ts4ACjhYANZYLL5SAL4MUgD06dAAAqQQALSIAOZEuGhSbJzcvBQgIHaO0GbIVvxCYdAA1E2Bwcp26syZ0ADKWCAUpIjE0ACMFtBKmIhE9isQiEvQWBjQmmSU1LgZWZWyNXV2AFzQBytFftCZJ3vEBzq4hsZDWQEt1u0xI03J5vEkfv5mpY+kRQkCItE4glwU9fj1-rV6h0nFDWjYGt1cTC4RIXqkXmMJlMZgAmBYUeTQIpoUikNA4F5narM0gXLFiL6MCHMPCkCg4IjoywA2wdQm9BT9MKPYapVJAA

class ThisBeforeConstructor {
  public firstName;
  public secondName;

  constructor() {
    this.firstName = "Vojta";
    this.secondName = "Prokop";
  }

  // @ts-ignore
  public fullName = this.firstName + this.secondName;

  // Solution 1. define inside of constructor
  // public fullName: string;
  //
  // constructor() {
  //   this.firstName = "Vojta";
  //   this.secondName = "Prokop";
  //   this.fullName = this.firstName + this.secondName;
  // }

  // Solution 2. use getter
  // public get fullName() {
  //   return this.firstName + this.secondName;
  // }
}
