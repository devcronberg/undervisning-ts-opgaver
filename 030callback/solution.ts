{
  function job(func: () => void) {
    console.log("start");
    // tåbelig måde at vente et stykke tid,
    // men for at gøre koden synkron er
    // det nemmest (og til at forstå)
    for (let i = 0; i < 2000000000; i++) {}
    func();
    console.log("slut");
  }

  let skriv = function() {
    console.log("*");
  };
  job(skriv);
  job(function() {
    console.log("*");
  });
  job(() => console.log("*"));
}
