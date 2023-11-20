// eslint-disable-next-line consistent-return
const verifyRoles =
  (...allowedRoles: any[]) =>
  (
    req: { roles: any[] },
    res: { sendStatus: (arg0: number) => any },
    next: () => void
    // eslint-disable-next-line consistent-return
  ) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };

export default verifyRoles;
