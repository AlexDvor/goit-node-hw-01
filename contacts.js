const { uuid } = require("uuidv4");

const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const contactsData = await fs.readFile(contactsPath);
  const normalizeData = JSON.parse(contactsData);
  // console.log(normalizeData);
  return normalizeData;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findContacts = contacts.find((contacts) => contacts.id === contactId);
  // console.log("findContacts+++++++++", findContacts);
  return findContacts;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  const updatedData = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(updatedData));
  return contacts[idx];
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const randomId = uuid().slice(0, 5);
  const newContacts = {
    id: randomId,
    name,
    email,
    phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContacts;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
