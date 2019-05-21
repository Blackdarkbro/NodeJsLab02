import * as fs from "fs";
import {LegalPerson, Bank} from "../../../models/classes";

export class BankDall{

    private data:string = fs.readFileSync("dataBase.json", 'utf8');
    private legalPersons:LegalPerson[] = JSON.parse(this.data)

    public bank: Bank = new Bank(this.legalPersons);

    constructor() {
    }

    public createBank():Bank {
        return this.bank;
    }

    public findById(legalPersonId: number):LegalPerson {
      return  this.bank.legalPersons.find((elem:LegalPerson) => elem.id === legalPersonId);
    }
}