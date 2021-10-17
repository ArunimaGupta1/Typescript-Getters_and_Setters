class Employee{
    private _fullName:string="";

    get fullName():string{
        return this._fullName;
    }

    set fullName(newName:string){
        this._fullName = newName;
    }
}

let emp1 = new Employee();
emp1.fullName = "Arunima Gupta";
console.log(emp1.fullName);