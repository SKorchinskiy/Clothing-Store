let currentUser = null;

export const db = "testDb";
export const getCurrentUser = () => currentUser;
export const signOutUser = () => {
  currentUser = null;
};
export const signUpUserByEmail = (userData) => {
  return (currentUser = {
    ...userData,
  });
};
export const signInUserByEmail = (auth, email, password) => {
  return (currentUser = {
    email,
    password,
  });
};

export const signInUserWithGoogle = () => {
  return (currentUser = {});
};
