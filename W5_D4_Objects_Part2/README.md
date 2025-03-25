# module02_week05_day04

# Objects Part 2

## Assignment: 

In this assignment, you will practice creating and creating and using objects in JavaScript to organize related pieces of data.

For this assignment, you'll be adding functionality to our student roster to make bulk updates easier.

----delete below-----
composition with a constructor function and an attendance function

create an object literal
give it a constructor property and set that equal to a function

    const studentPrototype = {

        //properties
        name: "student",
        grade: 100,
        conduct: "S"

    }

    studentPrototype.Constructor = function() {

    }
    studentProtype.Attendance = function() {

    }

    let x = new studentPrototype.constructor();

- Construct objects through a mix of composition and prototypal inheritance.
- Store and manipulate objects in an array
- Use the Array object's Filter method to filter an array to find an object with a specific value
- Apply actions to every array item with the Array object's Map method
- Recognize JSON notation

-------delete above------

### Instructions

#### Task 1: Setup Your Environment

##### 1.1 New File

- Open your preferred code editor (e.g., Visual Studio Code) and clone down your assignment repo.

- Create a new JavaScript file named `object_lab_2.js`

    ```All following steps will be in this same file```

#### Task 2: Warm Up

##### 2.1 Create an Object Literal for your Students

- Create your object literal and name it _studentPrototype. The object should contain a name, grade, and conduct property.

##### 2.2 Create a Function

- Name your function attendance.

- This function should output "NAME: Present!" or some similar message to the console, where NAME is the value of the object'.

##### 2.3 Create a Constructor Function

- Name your function constructor.

- This function should set properties for `new` objects to have the same properties that the _studentPrototype has.

#### Task 3: Compose our Object

To compose our object literal, constructor function, and attendance function into 1 object that we can easily reproduce:

- Update _studentPrototype by declaring properties called constructor and attendance variables.

- Assign these variables to their respective functions from Task 2.

#### Task 4: Create an Array

- Create and populate an array named Students with objects that inherit from _studentPrototype.

- Assign custom values for each student.

#### Task 5: Filter

Now, let's create a second array that only contains students with an A (90 - 100).

- Create a function that takes in a single parameter. 

Since we're whittling down our Students array, student would be an excellent parameter name. This parameter will represent each item in the array when we run the Students.filter() method.

- return an expression that compares the parameter to the values we're filtering for

   Example: ```return student.grade = 100```

We can now create an array that will contain the students with a 100 grade average 
    ```let perfectScores = Students.filter(filter100(student));```

- Create new array variables for each letter grade A, B, C, D, F and assign them to a Students.filter function call


#### Task 6: Map

Now, we're going to make use of our Attendance functions on all of our objects. 

- Use the Array.map method on the Students array to call each student object's attendance method.
    Note: The function can either be a variable or anonymous.

