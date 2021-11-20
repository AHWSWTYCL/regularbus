export class Roadmap {
  path: string = ''
  stations: Station[] = []
}

export class Station {
  name: string = ''

  constructor(name: string) {
    this.name = name;
  }
}
