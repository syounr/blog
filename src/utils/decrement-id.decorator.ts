import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DecrementId = createParamDecorator(
  (data: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    data.forEach(element => {
      let value = request.query[element];
      console.log(data)
      request.query[element] = value - 1
    });
    return data;
  },
);