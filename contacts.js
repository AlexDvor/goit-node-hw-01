const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const contactsData = await fs.readFile(contactsPath);
  const parseData = JSON.parse(contactsData);
  return parseData;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findContacts = contacts.find(
    (contacts) => contacts.id === Number(contactId)
  );

  if (!findContacts) {
    return null;
  }
  return findContacts;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  const updatedData = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(updatedData));
  return listContacts();
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const randomId = Math.floor(Math.random() * (300 - 50) + 5);

  const newContacts = {
    id: randomId,
    name,
    email,
    phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return listContacts();
};

module.exports = { listContacts, getContactById, removeContact, addContact };
