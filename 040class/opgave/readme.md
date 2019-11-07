# Klasse

Dette er en opgave i brug af en klasse og nedarvning. Start med at skabe en tom ts-fil, og sørg for følgende

- Skab en abstrakt klasse Terning med
  - et protected felt _værdi (number)
  - en get-egenskab Værdi der returnerer _værdi
  - en metode ryst, der skaber en tilfældig værdi til _værdi
    - Math.floor(Math.random() * 6) + 1
  - en abstrakt metode skriv (void)
- Skab en klasse LudoTerning der arver fra Terning
  - dan en skriv således, at den skriver
    - [1] [2] [G] [4] [S] [6]
- Skab en samling terninger for at teste LudoTerning

Find min løsning [her](../solution.ts)