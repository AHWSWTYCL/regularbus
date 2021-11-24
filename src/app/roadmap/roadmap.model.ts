export class Roadmap {
  line: string = ''
  stations: Station[] = []
}

export class Station {
  name: string = ''

  constructor(name: string) {
    this.name = name;
  }
}
