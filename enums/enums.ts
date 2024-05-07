// What is Enum ----> Enum can be used to Restrict the users choice
// For Example we are building an ecommerce platform and we only want to have two types users which is generally the normal user and admin and we dont want to create another user so we use enum at that moment which can restrict me to have another type of user

enum User {
  user,
  admin,
}

// const newUser=User.advanceUser // Cannot do that
const newUser = User.user;
