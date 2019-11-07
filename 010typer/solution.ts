{
  let a: number = 1;
  let b: string = "*";
  let c: boolean = false;
  let d: any = "*";
  let e: object = {};
  // let f: Function = function(): any {};
  let f: () => void = () => {
    console.log("*");
  };
  let g: number[] = [4, 45, 1];

  function add1(x: number, y: number): number {
    return x + y;
  }

  const add2: (a: number, b: number) => number = function(
    x: number,
    y: number
  ): number {
    return x + y;
  };

  const add3: Function = (x: number, y: number) => x + y;

  console.log(add1(5, 5));
  console.log(add2(5, 5));
  console.log(add3(5, 5));

  enum Køn {
    Mand,
    Kvinde
  }

  let h: Køn = Køn.Kvinde;

  const addSubtract: (x: number, y: number) => [number, number] = (
    x: number,
    y: number
  ) => [x + y, x - y];

  let i: [number, number] = addSubtract(7, 3);
  console.log(i[0] + " og " + i[1]);
}
