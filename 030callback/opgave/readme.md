# Callback

Dette er en simpel opgave i brug af en callback metode. Start med at skabe en tom ts-fil, og sørg for følgende

Kopier følgende funktion filen:

```javascript
function job(func: () => void) {
  console.log("start");
  // tåbelig måde at vente et stykke tid,
  // men for at gøre koden synkron er
  // det nemmest (og til at forstå)
  for (let i = 0; i < 2000000000; i++) {}
  func();
  console.log("slut");
}
```

Funktionen kan kaldes med en funktion, der skal afvikles efter et kort stykke tid (ca 2 sek). Du skal sørge for at kalde funktionen således, at der efter 2 sekunder skrives en * til konsollen. Sørg for at kalde job med

- en reference til en funktion
- en anonym funktion
- en lambda


Find min løsning [her](../solution.ts)