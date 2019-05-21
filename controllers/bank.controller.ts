import {LegalPerson, Bank} from "../models/classes";
import {BankService} from "../services/bankService/bank.servis"
import {AddAtFile, RemoveFromFile} from "../services/writeFile.service"

export class BankController {

    private bankService:BankService;

    constructor() {
        this.bankService = new BankService();
    };

    public addLegalPerson(personId: number): void {
        const bank: Bank = this.bankService.getBank();

        if (bank.legalPersons.some((elem:LegalPerson) => elem.id === personId)) {
            throw new Error("Such Legal Person alredy exists.")
    }
    else{
        const newPerson: LegalPerson = new LegalPerson();
        newPerson.id = personId;
        newPerson.paymentSum = 0;
        newPerson.credits = [];

        bank.legalPersons.push(newPerson);

        AddAtFile(newPerson);

        console.log(`Created a new Legal person (${personId}).`);
    }
}

public removeLastPerson(): void {
    this.bankService.createBunk().legalPersons.pop();  
    RemoveFromFile();
}

    public displayInfo(): void {
        
        this.bankService.getBank().legalPersons.forEach((elem:LegalPerson) => {
            console.log(`\nID of legal person - ${elem.id}`);

            elem.credits.forEach((credit) => { console.log(`Id of credit: ${credit.id}, date: ${credit.creatingDate}, sum: ${credit.value}`)});

            console.log(`sum of all payments - ${elem.paymentSum}\n`);

        })
    }
}