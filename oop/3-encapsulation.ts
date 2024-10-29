class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // Method to authenticate user
  authenticate(enteredPassword: string): boolean {
    return enteredPassword === this.password;
  }

  // Method to change password
  changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}

// Create a user
const user = new User("Ahmad Jafari", "abcd1234");

console.log(user.authenticate("12345678")); // Output: false
console.log(user.authenticate("abcd1234")); // Output: true

user.changePassword("Ab1234!?");

console.log(user.authenticate("abcd1234")); // Output: false
console.log(user.authenticate("Ab1234!?")); // Output: true
