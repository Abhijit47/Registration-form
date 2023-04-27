console.log("Hello");

const formElement = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');

// input field's reference
const firstName = document.querySelector('.fname');
const lastName = document.querySelector('.lname');
const email = document.querySelector('.email');
const phNum = document.querySelector('.number');
const city = document.querySelector('.city');
const state = document.querySelector('.state');
const pincode = document.querySelector('.pincode');
const country = document.querySelector('.country');
const gender = document.querySelector('.gender');
const dob = document.querySelector('.dob');

// initial data
let data = [];

class TableData {
  constructor (firstName = '', lastName = '', email = '', phNum = '', city = '', state = '', pincode, country = '', gender = '', dob = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phNum = (phNum.length === 13 || 11) ? phNum.slice(3) : phNum.slice(1);
    this.city = city;
    this.state = state;
    this.pincode = pincode;
    this.country = country;
    this.gender = gender;
    this.dob = dob;
    console.log(this.phNum.length);
  };
};

const updateData = () => {
  let htmlTemplate;
};


const getData = () => {
  console.log("submit");

  const newData = new TableData(firstName.value, lastName.value, email.value, phNum.value, city.value, state.value, pincode.value, country.value, gender.value, dob.value);


  data.push(newData);
  console.log(data);
  location.assign('/data.html');
};


// formElement.addEventListener('submit', getData);
submitBtn.addEventListener('click', getData);