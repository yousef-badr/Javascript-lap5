class Person {
  constructor(fullName,age, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    this.age = age;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = 'happy';
    } else if (hours < 7) {
      this.sleepMood = 'tired';
    } else {
      this.sleepMood = 'lazy';
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

class Employee extends Person {
  constructor(fullName, money,age, sleepMood, healthRate, id, email, workMood, salary, isManager) {
    super(fullName, money,age, sleepMood, healthRate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary >= 1000;
    this.isManager = isManager;
    this.healthRate = healthRate <= 1000;
  }

  work(hours) {
    if (hours === 8) {
      this.workMood = 'happy';
    } else if (hours > 8) {
      this.workMood = 'tired';
    } else {
      this.workMood = 'lazy';
    }
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empId) {
    const employee = this.employees.find(emp => emp.email === empId);
    if (employee) {
      if (employee.isManager){
        return{
          ...employee,
          salary : '****'
        }
      }
        else{
          employee
        }
    } 
    else {
      return null;
    }
  }
  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    this.employees = this.employees.filter(emp => emp.email !== empId);
  }
}
const office = new Office('company');
function user() {
  const option = prompt('For adding new employee enter (add) \n If manager add (mngr) \n if normal empolyee press (nrml)');
  switch (option) {
    case 'add':
      addEmployee();
      break;
    case 'mngr':
      addManager();
      break;
    case 'nrml':
      addNormalEmployee();
      break;
    case 'q':
      alert('Quitting the application.');
      return;
    default:
      alert('Invalid option. Try again.');
  }
  user();
}
function addEmployee() {
  const fullName = prompt('Enter full name : ');
  const age = parseInt(prompt('Enter your age : '));
  const id = prompt('Enter employee ID: ');
  const email = prompt('Enter employee email: ');
  const salary = parseInt('Enter your salary: ');
  const isManager = false;
  const employee = new Employee(fullName, age, id, email, salary, isManager);
  office.hire(employee);
  alert('Employee added successfully!');
}
function addManager() {
  const fullName = prompt('Enter full name : ');
  const age = parseInt(prompt('Enter your age : '));
  const id = prompt('Enter employee ID: ');
  const email = prompt('Enter employee email: ');
  const salary = parseInt('Enter your salary: ');
  const isManager = true;
  const manager = new Employee(fullName, age, id, email, salary, isManager);
  office.hire(manager);
  alert('Manager added successfully!');
}
function addNormalEmployee() {
  const fullName = prompt('Enter full name : ');
  const age = parseInt(prompt('Enter your age : '));
  const id = prompt('Enter employee ID: ');
  const email = prompt('Enter employee email: ');
  const salary = parseInt('Enter your salary: ');
  const isManager = false;
  const normalEmployee = new Employee(fullName, age, id, email, salary, isManager);
  office.hire(normalEmployee);
  alert('Normal Employee added successfully!');
}
user();
