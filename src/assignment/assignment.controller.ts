/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment')
export class AssignmentController {
  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const primeNumber = parseInt(number);
    if (isNaN(primeNumber) || primeNumber < 1) {
      return { error: 'Invalid input. Please input a positive integer' };
    }

    const isPrime = this.isPrime(primeNumber);
    return { isPrime };
  }

  private isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number === 2) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}
