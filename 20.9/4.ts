enum Roles {
  Admin = 1,
  User = 2,
}

enum SuperRoles {
  SuperUser = 999,
}

type Admins = Exclude<Roles | SuperRoles, 2>;
const admin: Admins = 999;
