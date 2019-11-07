{
  abstract class Terning {
    protected _værdi: number;
    get værdi(): number {
      return this._værdi;
    }
    constructor() {
      this.ryst();
    }
    public ryst() {
      this._værdi = Math.floor(Math.random() * 6) + 1;
    }
    public abstract skriv(): void;
  }

  class LudoTerning extends Terning {
    constructor() {
      super();
    }
    public skriv() {
      if (this._værdi === 3) {
        console.log("[G]");
        return;
      }
      if (this._værdi === 5) {
        console.log("[S]");
        return;
      }
      console.log(`[${this._værdi}]`);
    }
  }

  let t1 = new LudoTerning();
  console.log(t1.værdi);
  t1.skriv();
}
