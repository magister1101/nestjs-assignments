/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment')
export class AssignmentController {
  @Get('fibonacci/:number')
  getFibonacciSequence(@Param('number') number: string) {
    const count = parseInt(number);
    if (isNaN(count) || count < 1) {
      return { error: 'Invalid input' };
    }

    const sequence = this.fibonacciSequence(count);
    return { sequence };
  }

  private fibonacciSequence(count: number): number[] {
    if (count == 1) return [0];
    if (count == 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }
}
