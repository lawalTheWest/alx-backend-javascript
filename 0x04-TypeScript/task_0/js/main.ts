/**
  The Student interface that accepts:
  firstName(string),
  lastName(string),
  age(number), and
  location(string)
*/
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student_1: Student = {
	firstName: 'Lawal';
        lastName: 'Tajudeen';
        age: 14;
        location: 'Lagos';
};

const student_2: Student = {
	firstName: 'Khalid';
        lastName: 'John';
        age: 15;
        location: 'USA';
};

const StudentList = [student_1, student_2];

const tbl = document.createElement('table');
const the_bdy = document.createElement('tbody');

StudentList.forEach((std) => {
  const rw = document.createElement('tr');
  const fname = document.createElement('td');
  const lc = document.createElement('td');
  fname.textContent = std.firstName;
  lc.textContent = std.location;
  rw.appendChild(fname);
  rw.appendChild(lc);
  bdy.appendChild(rw);
});

tbl.appendChild(the_bdy);
document.body.appendChild(tbl);
