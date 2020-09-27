export const UserDataContext = React.createContext({});

const UserDataContextProvider = ({children}) => {
  const [userDataState, setUserDataState] = React.useState(null);
  if (typeof window !== 'undefined' ) {
    const localStorageUserData = JSON.parse(window.localStorage.getItem('userData'));

    if(localStorageUserData && localStorageUserData?.token !==  userDataState?.token ){
      setUserDataState(localStorageUserData);
    }
  }

  const setUserData = (user) => {
    setUserDataState(user);
    window.localStorage.setItem('userData', JSON.stringify(user));
  };

  const userData = userDataState;

  return(
    <UserDataContext.Provider value={{userData, setUserData}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;