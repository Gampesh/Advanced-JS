(function(){
    function Person (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        Object.defineProperty(this, 'fullName', {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            enumrable: true
        });

    }

    function Student (firstName, lastName, age){
        this._enrolledCourses = [];
        this.enroll = function (courseId) {
            this._enrolledCourses.push(courseId);
        };
        this.getCourses = function() {

        };
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    // console.log(Person);
    // console.log(Student);
    console.log(Person.prototype);
    console.log(Student.prototype);

})();