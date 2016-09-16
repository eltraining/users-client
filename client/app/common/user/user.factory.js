
let UserFactory = function () {
  class User {

      constructor(name) {
          this.name = name;
          this.isSignedIn = false;
      }
   }

  this.user = null;

  let getUser = () => {
    if(null == this.user) {
      this.user = new User("");
    }
    return this.user;
  };

  let updateUser = (name, isSignedIn) => {
    this.user.name = name;
    this.user.isSignedIn = isSignedIn;
    return this.user;
  }

  let isSignedIn = () => {
    return this.user.isSignedIn;
  };

  return { getUser, isSignedIn, updateUser };
};

export default UserFactory;

