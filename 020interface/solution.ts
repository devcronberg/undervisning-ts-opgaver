{
  interface IPerson {
    navn: string;
    fødselsår: number;
    alder: Function;
  }

  function alder() {
    return new Date().getFullYear() - this.fødselsår;
  }

  const a: IPerson = {
    navn: "Mathias",
    fødselsår: 2006,
    alder
  };

  function skriv(o: IPerson): void {
    console.log(`Jeg hedder ${o.navn} og er ${o.alder()} gammel.`);
  }

  skriv(a);

  function danPerson(navn: string, fødselsår: number): IPerson {
    return {
      navn,
      fødselsår,
      alder
    };
  }

  skriv(danPerson("Mikkel", 2003));
}
