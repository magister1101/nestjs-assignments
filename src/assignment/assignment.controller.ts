/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment')
export class AssignmentController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string) {
    const factorialNumber = parseInt(number);
    if (isNaN(factorialNumber) || factorialNumber < 0) {
      return { error: 'Invalid input. Please input a positive integer' };
    }

    const factorial = this.getFactorial(factorialNumber);
    return { factorial };
  }

  private getFactorial(number: number): number {
    if (number === 0 || number === 1) return;
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result = result * i;
    }
    return result;
  }
}
