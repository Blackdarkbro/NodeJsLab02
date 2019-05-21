import {BankDall} from "./DAL/bank.dal";
import { LegalPerson, Bank } from "../../models/classes";

export class BankService {

    private bankDall:BankDall;

    constructor() {
        this.bankDall = new BankDall();
    }

    public createBunk():Bank {
        return this.bankDall.bank;
    }

    public findById(personId: number): LegalPerson {
        const person: LegalPerson | null = this.bankDall.findById(personId);
        if(!person) throw new Error("Legal person not found.");
        return person;
    }
   public getBank(): Bank {
       return this.bankDall.bank;
    }
}