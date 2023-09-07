class Functionary {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  payTax(rate: number = 7.5): void {
    console.log(`Paying ${(this.salary * rate) / 100} in taxes`);
  }
}

class Secretary extends Functionary {}

class Executive extends Functionary {
  payTax(rate: number = 27.5): void {
    console.log("Executives pay more!");
    super.payTax(rate);
  }
}

let sarah = new Secretary("Sarah", 2000);
sarah.payTax();

let jorge = new Executive("Jorge", 30000);
jorge.payTax();
