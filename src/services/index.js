export function authService(data) {
  const admin = {
    email: 'admin@email.com',
    password: 'admin000',
  };

  const seller = {
    email: 'vendedor@email.com',
    password: 'vendedor000',
  };

  if (data.email === admin.email && data.password === admin.password) {
    const res = {
      token: 'admin',
      success: true,
    };

    return res;
  } if (data.email === seller.email && data.password === seller.password) {
    const res = {
      token: 'seller',
      success: true,
    };

    return res;
  }
  const res = {
    success: false,
  };

  return res;
}

export default { authService };
