const operations = require("./contacts");
const { program } = require("commander");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await operations.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContactById = await operations.getContactById(id);
      if (!getContactById) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(getContactById);
      break;

    case "add":
      const newUser = await operations.addContact(name, email, phone);
      console.log(newUser);
      break;

    case "remove":
      const deleteUser = await operations.removeContact(id);
      console.log(deleteUser);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "contact operation")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);

const options = program.opts();

invokeAction(options);
