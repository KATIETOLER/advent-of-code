import { Day } from "@src/day.js"
import "prequel"

export default class Day01 implements Day {
  parseInput(input: string): number[] {
    let elves = input.split('\n\n')

    return elves
      .map((elf) =>
          elf.split('\n')
            .map((str) => parseInt(str))
            .sum()
      ).sortNum()
  }

  part1(input: string): Promise<string> {
    let calories = this.parseInput(input)
    let max = Math.max(...calories)

    return Promise.resolve(max.toString())
  }
  part2(input: string): Promise<string> {
    let calories = this.parseInput(input)
    let topThree = calories.slice(-3).sum()

    return Promise.resolve(topThree.toString())
  }
}

