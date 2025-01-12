// model/Staff.ts
import { MoniteringLog } from './MoniteringLog';
import { Equipment } from './Equipment';
import { Vehicle } from './Vehicle';
import { Field } from './Field';

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
    monitoringLogs: MoniteringLog[];
    equipment: Equipment[];
    vehicles: Vehicle[];
    fields: Field[];


    constructor(id: string, firstName: string, lastName: string, designation: string, gender: string, joinedDate: string, dob: string, address: string, contactNo: string, email: string, role: string, monitoringLogs: MoniteringLog[], equipment: Equipment[], vehicles: Vehicle[], fields: Field[]) {
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
        this.monitoringLogs = monitoringLogs;
        this.equipment = equipment;
        this.vehicles = vehicles;
        this.fields = fields;
    }
}
