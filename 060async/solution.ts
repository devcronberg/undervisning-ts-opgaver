import * as axios from "axios";

(async function opgave() {
  const response = await axios.default.get("https://dawa.aws.dk/kommuner/");
  let navne: string[] = (response.data as object[]).map((v: any) => v.navn);
  navne.sort();
  for (const navn of navne) {
    console.log(navn);
  }
})();

// Alternativt... en metode der returnere et promise

// (async () => {
//   let hentKommuner: () => Promise<string[]> = async () => {
//     const response = await axios.default.get("https://dawa.aws.dk/kommuner/");
//     let navne: string[] = (response.data as object[]).map((v: any) => v.navn);
//     navne.sort();
//     return navne;
//   };

//   let kommuner = await hentKommuner();
//   console.log(kommuner);
// })();
