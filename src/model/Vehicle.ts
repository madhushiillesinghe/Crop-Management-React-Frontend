export class Vehicle {

    vehicleCode: string;
    licensePlateNo: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    remarks: string;
    staffId: string
    constructor(vehicleCode: string, licensePlateNo: string, vehicleCategory: string, fuelType: string, status: string, remarks: string, staffId: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNo = licensePlateNo;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
        this.staffId = staffId;
    }
}