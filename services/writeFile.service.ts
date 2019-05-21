import * as fs from "fs";
import {LegalPerson, Bank} from "../models/classes"

export function UpdateFile(editedPerson:LegalPerson):void {
    
    const data:string = fs.readFileSync("dataBase.json", 'utf8');
    const persons:LegalPerson[] = JSON.parse(data);
    
    for(let i = 0; i < persons.length; i++) {
        if(persons[i].id === editedPerson.id) {
            persons[i] = editedPerson
            break;
        }
    }

    const newData:string = JSON.stringify(persons);
    fs.writeFileSync("dataBase.json", newData);
}

export function AddAtFile(newPerson: LegalPerson):void {

    const data:string = fs.readFileSync("dataBase.json", 'utf8');
    const persons:LegalPerson[] = JSON.parse(data);

    persons.push(newPerson);

    const newData:string = JSON.stringify(persons);
    fs.writeFileSync("dataBase.json", newData);
}

export function RemoveFromFile():void {

    const data:string = fs.readFileSync("dataBase.json", 'utf8');
    const persons:LegalPerson[] = JSON.parse(data);

    persons.pop();

    const newData:string = JSON.stringify(persons);
    fs.writeFileSync("dataBase.json", newData);
}