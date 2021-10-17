const fullNameMaxLength = 10;

class Employee{
    private _fullName:string="";

    get fullName():string{
        return this._fullName;
    }

    set fullName(newName:string){
        if(newName && newName.length>fullNameMaxLength){
            throw new Error("Full name has reached the maximum length "+fullNameMaxLength)
        }
        this._fullName = newName;
    }
}

let emp1 = new Employee();
emp1.fullName = "Arunima";
if(emp1.fullName){
console.log(emp1.fullName);
}else{
    console.log("No full name available");
}