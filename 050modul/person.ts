export class Person {
  private _navn: string;
  public get navn(): string {
    return this._navn;
  }
  public set navn(v: string) {
    this._navn = v;
  }

  private _alder: number;
  public get alder(): number {
    return this._alder;
  }
  public set alder(v: number) {
    this._alder = v;
  }

  public skriv() {
    console.log(`Jeg hedder ${this.navn} og er ${this.alder} gammel`);
  }
}
