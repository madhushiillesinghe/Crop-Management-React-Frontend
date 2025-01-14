// model/Staff.ts


export class Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinedDate: string;
    dob: string;
    address: string;
    contactNo: string;
    email: string;
    role: string;



    constructor(id: string, firstName: string, lastName: string, designation: string, gender: string, joinedDate: string, dob: string, address: string, contactNo: string, email: string, role: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.address = address;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;

    }
}
