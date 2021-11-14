const getData = require("./contacts");

// console.log("__filename:::::", __filename);
// console.log("__dirname:::::", __dirname);
// console.log("process.argv:::::", process.argv);
// console.log("process.cwd():::::", process.cwd());

// console.log("contactsPath:::::", contacts.contactsPath);
// console.log("listContacts:::::", listContacts());
// console.log("getContactById:::::", contacts.getContactById(4));
// console.log("removeContact:::::", contacts.removeContact());
// getData.listContacts();
// getData.getContactById(2);

const test = async (num) => {
  return getData.addContact("Alex", "lolikdent@gmail.com", 444565446);
};

test();
