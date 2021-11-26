export class Station {
  line: string = ''
  name: string = ''
  time: string = ''

  constructor(line: string, name: string, time: string) {
    this.line = line;
    this.name = name;
    this.time = time
  }
}
