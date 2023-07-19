export function ClassDecorator(constructor) {
  constructor.api = "Teste";

  console.log(constructor);
}

export function PropertyDecorator(target: any, key: string) {
  console.log(target, key);
}

export function MethodDecorator(value: boolean = false) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    descriptor["MethodDecorator"] = value;
  };
}

export function ParameterDecorator() {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    console.log("target", target);
    console.log("property key", propertyKey);
    console.log("parameter index", parameterIndex);
  };
}
