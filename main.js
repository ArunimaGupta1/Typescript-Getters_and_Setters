var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = "";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee();
emp1.fullName = "Arunima Gupta";
console.log(emp1.fullName);
