import {LegalPersonDal} from "./DAL/legalPerson.dal";
import {LegalPerson} from "../../models/classes";

export class LegalPersonService{

    private legalPersonDal: LegalPersonDal;

    constructor() {    
      this.legalPersonDal = new LegalPersonDal();
    }

    public getById(personId: number): LegalPerson {
        const person: LegalPerson | null = this.legalPersonDal.getById(personId);
        if(!person){
            throw new Error("Legal person not found.");
        }
        return person;
    }
}