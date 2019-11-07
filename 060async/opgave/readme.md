# Async

I denne opgave skal du bruge [Axios](https://github.com/axios/axios) til at hente alle kommuner fra dawa, og udskrive disse i sorteret rækkefølge.

Start med at importere axios

```
import * as axios from "axios";
```

Husk - at det kræver at axios er installeret (er gjort i dette projekt)

```
npm i axios --save
npm i @types/axios --save
```

Alle kommuner i landet kan hentes fra

https://dawa.aws.dk/kommuner/

Prøv det i en browser så du kender formatet på JSON-objekterne. Du skal finde navnene ved hjælp af [axios.default.get](https://github.com/axios/axios#example)-metoden, og gemme disse i et string-array og sortere dette. Til sidste skal arrayet udskrives.

Find min løsning [her](../solution.ts)