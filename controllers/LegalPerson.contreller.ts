import {LegalPersonService} from "../services/LegalPersonService/legalPerson.service";
import {LegalPerson, Credit} from "../models/classes";
import {UpdateFile} from "../services/writeFile.service";


export class LegalPersonController {
    private personService: LegalPersonService;

    constructor() {
        this.personService = new LegalPersonService();
    }

    public takeCredit(personId: number, creditValue: number): void {
        const person: LegalPerson = this.personService.getById(personId);
                
        let cashArr: number[] = person.credits.map((num:Credit) => num.value);

        let totalCount:number;

        if(cashArr.length !== 0){
            totalCount = cashArr.reduce((sum:number, current:number) => sum +=current);
        }
        else totalCount = 0;
       
        if(creditValue > 25000 - totalCount) {
            throw new Error("You have exceeded your credit limit.")
        }
        else {
            person.credits.push(new Credit(creditValue));
            UpdateFile(person);
            console.log(`Your take credit on ${creditValue}$`);        
    }
}

    public payForCredit(personId: number, payment: number, creditId: number): void {
        const person: LegalPerson = this.personService.getById(personId);

        const credit: Credit | null = person.credits.find((credit:Credit) => credit.id === creditId);

        if(!credit) throw new Error("Credit not found.");
        else {

            if(payment >= credit.value ) {
                let index = person.credits.indexOf(credit);
                person.credits.splice(index - 1, 1);
                person.paymentSum += payment;  

                UpdateFile(person);
                console.log("You have successfully repaid the Credit");                
            }
            else {
                let index = person.credits.indexOf(credit);
                person.credits[index].value -= payment;    
                person.paymentSum += payment;  
                UpdateFile(person);
                console.log(`Your payment is done (${payment})`);     
            } 
                        
        }
    }

    public displayInfo(personId: number): void {
        const person: LegalPerson = this.personService.getById(personId);
        
        console.log(`Id person - "${person.id}"`);
    
        person.credits.forEach((credit:Credit) => {
            console.log(`Id of credit: ${credit.id}, date: ${credit.creatingDate}, sum: ${credit.value}`);
        })
        console.log(`Summary payment in this month - ${person.paymentSum}`);
    }
    
}