export function ClassDecorator(constructor: any) {}

export function PropertyDecorator(target: any, key: string) {}

export function MethodDecorator() {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {}
}

export function ParameterDecorator() {
    return (target: any, propertyKey: string, parameterIndex: number) => {}
}
