import axios from "axios";
// lodash has no .d.ts file that comes with it, so we have to make one or find it elsewhere.
// The red squiggly is gone, but you have to trust me that TS was real mad at us before we installed the .d.ts file.
import _ from "lodash";

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  }
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
}

// Quick func for logging User data.
function printUser(user: User): void {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
  console.log(`***************`);
}

// Not a whole lot of TS specific stuff here, but if we had misspelled res.data as res.DATA, TS would know that that property isn't on res object.
// Remember that the .then on the res object is resolving the promise for us
// First we made a request to this endpoint and saw what it gave back
// Then we created the above User interface, and passed that into the .get so that TS can enforce all of its properties.
axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
.then((res) => {
  console.log('Hitting single user endpoint!');
  printUser(res.data);
}).catch(e => {
  console.log(`Error!`, e);
})


// This time we are not going to the specific user endpoint, but to the all users
// So we changed .get to type array of User objects
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then((res) => {
  console.log('Hitting all user endpoint!');
  // and now we need to change our logic to handle an array of user objects, rather than just a single user object
  // printUser(res.data);
  res.data.forEach(printUser);
}).catch(e => {
  console.log(`Error!`, e);
})

// now with lodash .sample and printuser to just get the info from one random user
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then((res) => {
  console.log(`using lodash's sample`)
  // Check the HTML for stupid bug story involving the next 3 lines
  // _.sample(res.data);
  // console.log(_.sample(res.data));
  printUser(_.sample(res.data)!);
}).catch(e => {
  console.log(`Error!`, e);
})
