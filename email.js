const notifyByEmail = (address) => {
 return `Email sent to: ${address}`; 
};

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`; 
};

const notify = (contact, method) => {
  console.log(method(contact));
};

notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000', notifyByText);
