export class Bank {
     legalPersons:LegalPerson[];
    constructor(legalPersons:LegalPerson[]) {
        this.legalPersons = legalPersons;
    }
}

export class LegalPerson {
    id: number;
    credits: Credit[];
    paymentSum: number = 0;
}

export  class Credit {

    private static ID: number = 0;
    public readonly id: number = Credit.ID;
    public value: number;
    public creatingDate: string;

    constructor(cash: number) {
        this.value = cash;
        let now = new Date();
        this.creatingDate = now.toDateString();
        Credit.ID++;
    }
}