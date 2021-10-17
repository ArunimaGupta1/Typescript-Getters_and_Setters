var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = "";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("Full name has reached the maximum length " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee();
emp1.fullName = "Arunima";
if (emp1.fullName)
    console.log(emp1.fullName);
