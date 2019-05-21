import {LegalPerson, Bank} from "../../../models/classes";
import * as fs from "fs";

export class LegalPersonDal{

    private content = fs.readFileSync("dataBase.json", 'utf8');
    private persons: LegalPerson[] = JSON.parse(this.content);
    
    constructor() {
    }

    
    public getById(personId: number): LegalPerson | null {
        return this.persons.find((person:LegalPerson) => person.id === personId);
    }
}