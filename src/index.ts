import {
  ClassDecorator,
  PropertyDecorator,
  MethodDecorator,
  ParameterDecorator,
} from "@decorators/decorator";

@ClassDecorator
class teste {
  @PropertyDecorator
  teste;

  constructor() {
    this.teste = "teste";
  }

  @MethodDecorator()
  abc(@ParameterDecorator() param) {}
}

function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
