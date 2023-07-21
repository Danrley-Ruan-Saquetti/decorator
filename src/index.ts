import {
  ClassDecorator,
  PropertyDecorator,
  MethodDecorator,
  ParameterDecorator,
} from "@decorators/decorator";

// @ClassDecorator
// class teste {
//   @PropertyDecorator
//   teste;

//   constructor() {
//     this.teste = "teste";
//   }

//   @MethodDecorator()
//   abc(@ParameterDecorator() param) {}
// }

// function first() {
//   console.log("first(): factory evaluated");
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("first(): called");
//   };
// }

// function second() {
//   console.log("second(): factory evaluated");
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("second(): called");
//   };
// }

// class ExampleClass {
//   @first()
//   @second()
//   method() {}
// }

// function logExecutionDate(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     const currentDate = new Date().toLocaleString();
//     console.log(`Method ${propertyName} executed on: ${currentDate}`);
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

// // Segundo decorator para calcular o tempo de execução do método
// function logExecutionTime(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.time(`Execution time for ${propertyName}`);
//     const result = originalMethod.apply(this, args);
//     console.timeEnd(`Execution time for ${propertyName}`);
//     return result;
//   };

//   return descriptor;
// }

// class MyClass {
//   @logExecutionDate
//   @logExecutionTime
//   public someMethod() {
//     // Simulação de um método que leva algum tempo para ser executado
//     for (let i = 0; i < 1000000000; i++) {
//       // Faz alguma computação...
//     }
//   }
// }

// const myClass = new MyClass();
// myClass.someMethod();

// Decorator de exemplo que é chamado sempre que o método decorado for executado
function executeWithDecorator(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // Lógica do decorator a ser executada antes do método original
    console.log("Decorator was executed before the method.");

    // Chamada ao método original
    const result = originalMethod.apply(this, args);

    // Lógica do decorator a ser executada após o método original
    console.log("Decorator was executed after the method.");

    return result;
  };

  return descriptor;
}

class MyClass {
  @executeWithDecorator
  public someMethod() {
    console.log("This is the original method.");
  }
}

const myClass = new MyClass();
myClass.someMethod();
console.log();
myClass.someMethod();
console.log();
myClass.someMethod();
console.log();
myClass.someMethod();
console.log();
myClass.someMethod();
