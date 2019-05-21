import {LegalPersonController} from "./controllers/LegalPerson.contreller";
import {BankController} from "./controllers/bank.controller";


import * as express from 'express';

const app = express();   

const legalPersonController: LegalPersonController = new LegalPersonController();
const bankController: BankController = new BankController();

app.get("/legal-person/:id", (req, res, next) => {
    try {        
        let personId:number = +req.params.id;

        legalPersonController.displayInfo(personId);
        
        res.send("done");
    }
    catch(err){
        next(err);
    }
});
app.post("/legal-person/:id/takeCredit/:value", (req, res, next) => {
    try {
        legalPersonController.takeCredit(+req.params.id, +req.params.value);
        res.send("done");        
    }
    catch(err){
        next(err);
    }
});
app.put("/legal-person/:id/payForCredit/:value/:creditId", (req, res, next) => {
    try {
        let personId:number = req.params.id;
        let creditValue:number = +req.params.value;
        let creditId:number = +req.params.creditId
        legalPersonController.payForCredit(personId, creditValue, creditId);
        res.send("done");        
    }
    catch(err){
        next(err);
    }
});
app.post("/bank/create-legal-person/:id", (req, res, next) => {
    try{
    let personId:number = +req.params.id;
    bankController.addLegalPerson(personId);

    res.send("done");
    }
    catch(err) {
        next(err);
    }
});
app.get("/bank/legal-persons", (req, res, next) => {
   try{
    bankController.displayInfo();

    res.send("done");
   }
   catch(err){
       next(err);
   }
})
app.delete("/bank/legal-person", (req, res, next) => {
   try{
    bankController.removeLastPerson();
    res.send("done");
   }
   catch(err){
       next(err);
   }
});

app.listen(3000, () => {console.log("Server lestening on 3000")});



