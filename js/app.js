// 'use strict';

// let id;
// let age;
// let newstudentname, mobile, tuition, email, Total;


// /////////random function///////////////////

// function ageRandom() {
//   age = Math.floor(Math.random() * 12) + 18;
//   return age;
// }

// ///////////////constractor/////////////////////

// function Stundentinformation(email, mobile, tuition) {
//   // this.id = id;
//   this.studentname = newstudentname;
//   this.email = email;
//   this.mobile = mobile;
//   this.age = age;
//   this.tuition = tuition;


//   Stundentinformation.all.push(this);
//   // console.log(Stundentinformation.all);


// }

// Stundentinformation.all = [];

// /////////////// render function //////////////////////////////////
// function render() {
//   Total = 0;
//   //////////get div from Html////////
//   let info = document.getElementById('tableinfo');

//   ///////create table ///////////
//   let table = document.createElement('table');
//   info.appendChild(table);
//   table.id = 'tableinfo1';
//   ///////////create tr inside the table ///////////
//   let trEL = document.createElement('tr');
//   table.appendChild(trEL);
//   /////////// creatr Th inside the tr to the table ///// the td will be the same ///////
//   let thEl = document.createElement('th');
//   trEL.appendChild(thEl);
//   thEl.textContent = 'id';

//   let thEl1 = document.createElement('th');
//   trEL.appendChild(thEl1);
//   thEl1.textContent = 'Name';

//   let thEl2 = document.createElement('th');
//   trEL.appendChild(thEl2);
//   thEl2.textContent = 'Email';

//   let thEl3 = document.createElement('th');
//   trEL.appendChild(thEl3);
//   thEl3.textContent = 'Mobile';

//   let thEl4 = document.createElement('th');
//   trEL.appendChild(thEl4);
//   thEl4.textContent = 'Age';

//   let thEl5 = document.createElement('th');
//   trEL.appendChild(thEl5);
//   thEl5.textContent = 'Tition';
//   ///////////restore the data from the localstorge //////////////
//   restorinfo();


//   /////////////////////print the total for tuition//////////////

// }
// render();

// ///////////////////event listner //////////////

// let info = document.getElementById('info');
// info.addEventListener('submit', inputinfo);

// function inputinfo(event) {
//   event.preventDefault();
//   console.log(event)
//   ////////delete old table from html ///////////
//   let mytable = document.getElementById("tableinfo1");
//   mytable.remove();
//   /////////call render to print the table again////////////
//   render();

//   ///////////to get the valu for email //////////////
//   email = event.target.StudentEmail.value;

//   ///////////to calculate value for the student name //////////////
//   let stedentN = email.split('@');
//   newstudentname = stedentN[0];
//   // console.log(newstudentname);
//   ///////////to get the valu for mobile //////////////
//   mobile = event.target.stunentmobileNumber.value;

//   ///////////to get the valu for tuition //////////////
//   tuition = event.target.tuition1.value;

//   ///////////to get the valu for age from the random function //////////////
//   age = ageRandom();

//   ///////////create new instance for the constractore   //////////////
//   let newstudent = new Stundentinformation(email, mobile, tuition);
//   // console.log(newstudent);

//   /////////////////////////print data on the html/////////////////

//   stroeinforender();
//   /////////////////////////to print total tuition/////////////

//   for (let i = 0; i < Stundentinformation.all.length; i++) {
//     Total = (Stundentinformation.all[i].tuition * 1) + Total;
//   }
//   let table = document.getElementById('tableinfo1');
//   let trEL1 = document.createElement('tr');
//   table.appendChild(trEL1);
//   trEL1.textContent = `Total: ${Total}`;

//   ///////////save the data on the localstorge //////////////////
//   saveinfo();
// }

// ///////////////to save the data in the localstorge////////////////
// function saveinfo() {
//   let saveinfo = JSON.stringify(Stundentinformation.all);
//   localStorage.setItem('studentinfo', saveinfo);

// }

// ////////////// to restore the data from the local storge//////////
// function restorinfo() {
//   let restorinfo = localStorage.getItem('studentinfo');
//   let restoreinfoJson = JSON.parse(restorinfo);
//   if (restoreinfoJson != null) {
//     Stundentinformation.all = restoreinfoJson;
//   }

//   let table1 = document.getElementById('tableinfo1');

//   for (let i = 0; i < Stundentinformation.all.length; i++) {

//     let trEl1 = document.createElement('tr');
//     table1.appendChild(trEl1);
//     let tdEl = document.createElement('td');
//     trEl1.appendChild(tdEl);
//     tdEl.textContent = i + 1;

//     let tdEl1 = document.createElement('td');
//     trEl1.appendChild(tdEl1);
//     tdEl1.textContent = Stundentinformation.all[i].studentname;

//     let tdEl2 = document.createElement('td');
//     trEl1.appendChild(tdEl2);
//     tdEl2.textContent = Stundentinformation.all[i].email;


//     let tdEl3 = document.createElement('td');
//     trEl1.appendChild(tdEl3);
//     tdEl3.textContent = Stundentinformation.all[i].mobile;


//     let tdEl4 = document.createElement('td');
//     trEl1.appendChild(tdEl4);
//     tdEl4.textContent = Stundentinformation.all[i].age;

//     let tdEl5 = document.createElement('td');
//     trEl1.appendChild(tdEl5);
//     tdEl5.textContent = Stundentinformation.all[i].tuition;
//   }

// }

// function stroeinforender() {

//   let table1 = document.getElementById('tableinfo1');
//   let trEl1 = document.createElement('tr');
//   table1.appendChild(trEl1);

//   let tdEl = document.createElement('td');
//   trEl1.appendChild(tdEl);
//   tdEl.textContent = Stundentinformation.all.length;

//   let tdEl1 = document.createElement('td');
//   trEl1.appendChild(tdEl1);
//   tdEl1.textContent = newstudentname;

//   let tdEl2 = document.createElement('td');
//   trEl1.appendChild(tdEl2);
//   tdEl2.textContent = email;


//   let tdEl3 = document.createElement('td');
//   trEl1.appendChild(tdEl3);
//   tdEl3.textContent = mobile;


//   let tdEl4 = document.createElement('td');
//   trEl1.appendChild(tdEl4);
//   tdEl4.textContent = age;

//   let tdEl5 = document.createElement('td');
//   trEl1.appendChild(tdEl5);
//   tdEl5.textContent = tuition;

// }

'use strict'

let totaltuiton = 0;
let email, mobile, tuition, studentname, ary, age;

function randomAge() {
  let age = Math.floor(Math.random() * 12) + 18;
  return age;
}

function StudentInfo(email, mobil, tuition) {
  this.studentname = studentname;
  this.email = email;
  this.mobile = mobile;
  this.age = age;
  this.tuition = tuition;

  StudentInfo.all.push(this);
}

StudentInfo.all = [];


function render() {

  let divEl = document.getElementById('tableinfo');

  let tableEl = document.createElement('table');
  divEl.appendChild(tableEl);
  tableEl.id = 'newtable';

  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Id';

  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = 'Name';

  let thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent = 'Email';

  let thEl3 = document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent = 'mobile';

  let thEl4 = document.createElement('th');
  trEl.appendChild(thEl4);
  thEl4.textContent = 'Age';

  let thEl5 = document.createElement('th');
  trEl.appendChild(thEl5);
  thEl5.textContent = 'Tuition';

  restoredata();
}

render();


let studentform = document.getElementById('studentinfo');
studentform.addEventListener('submit', renderinfo);


function renderinfo(event) {

  event.preventDefault();
  let mytable = document.getElementById('newtable');
  mytable.remove();
  // console.log('event');
  email = event.target.studentemail.value;

  mobile = event.target.mobilenumber.value;

  tuition = (event.target.tuition.value) * 1;

  ary = email.split('@');

  studentname = ary[0]

  // console.log(email,mobile,tuition);
  // console.log(studentname);
  totaltuiton = totaltuiton + tuition;

  age = randomAge();

  let newsteudent = new StudentInfo(email, mobile, tuition);
  saveinfo();

  render();
  // console.log(StudentInfo.all);
  location.reload();
}


function saveinfo() {
  let datasaved = JSON.stringify(StudentInfo.all);
  localStorage.setItem('studentinfo', datasaved);

}

function restoredata() {
  let restordata = localStorage.getItem('studentinfo');
  if (restordata != null) {
    StudentInfo.all = JSON.parse(restordata);


    let tableEl1 = document.getElementById('newtable');

    for (let i = 0; i < StudentInfo.all.length; i++) {
      let trEl2 = document.createElement('tr');
      tableEl1.appendChild(trEl2);

      let tdEl1 = document.createElement('td');
      trEl2.appendChild(tdEl1);
      tdEl1.textContent = i + 1;

      let tdEl2 = document.createElement('td');
      trEl2.appendChild(tdEl2);
      tdEl2.textContent = StudentInfo.all[i].studentname;


      let tdEl3 = document.createElement('td');
      trEl2.appendChild(tdEl3);
      tdEl3.textContent = StudentInfo.all[i].email;


      let tdEl4 = document.createElement('td');
      trEl2.appendChild(tdEl4);
      tdEl4.textContent = StudentInfo.all[i].mobile;

      let tdEl5 = document.createElement('td');
      trEl2.appendChild(tdEl5);
      tdEl5.textContent = StudentInfo.all[i].age;

      let tdEl6 = document.createElement('td');
      trEl2.appendChild(tdEl6);
      tdEl6.textContent = StudentInfo.all[i].tuition;

      let tdEl7 = document.createElement('td');
      trEl2.appendChild(tdEl7);
      tdEl7.textContent = 'Remove';
      tdEl7.style = 'color: red;'

      totaltuiton = totaltuiton + (StudentInfo.all[i].tuition * 1);
    }
    let trtotal = document.createElement('tr');
    tableEl1.appendChild(trtotal);
    trtotal.textContent = `total : ${totaltuiton}`;

    // console.log(StudentInfo.all);

  }

}

let studentremove = document.getElementById('newtable');
studentremove.addEventListener('click', removeinfo);


function removeinfo() {
  console.log(event);
  let removeinfo = event.target.innerText;
  let removeid = (event.target.parentElement.firstChild.textContent) * 1;

  let restordata = localStorage.getItem('studentinfo');
  if (removeinfo == 'Remove') {
    StudentInfo.all = JSON.parse(restordata);
    let arry = StudentInfo.all;
    let arry1 = arry.splice((removeid-1), 1);
    // StudentInfo.all = arry1;
    // removeElement(arry, 3);
    let mytable = document.getElementById('newtable');
    mytable.remove();
    location.reload();
    // localStorage.clear();
    saveinfo();
    render();

  }

  console.log(removeid);
}
