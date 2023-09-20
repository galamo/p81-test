type SuperUser = {
  password: string;
  firstName: string;
  lastName: string;
  roles: ("A" | "B")[];
};

type Sub = Omit<SuperUser, "roles" | "lastName">;
type SubPick = Pick<SuperUser, "roles" | "lastName" | "password">;

const subscriber: SubPick = { password: "aa" };

type T1 = { a: number };
type T2 = { b: string };

function getSomething(a: T1 | T2) {
  if ("a" in a) {
    console.log(a.a);
  }
}
