export class Staff{
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };

    constructor(id: string, name: {
        firstName: string;
        lastName: string
    }, designation: string, gender: string, joinedDate: string, dob: string, address: string, contactNo: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.address = address;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;
    }

    designation: string;
    gender: string; // Assuming gender is a string (adjust based on your backend enum)
    joinedDate: string;
    dob: string;
    address: string;
    contactNo: string;
    email: string;
    role: string;
}