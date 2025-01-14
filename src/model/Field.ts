import { MoniteringLog } from './MoniteringLog';
import {Staff} from './Staff';
import {Crop} from './Crop';
export class FieldData {
    fieldCode: string;
    fieldName: string;
    fieldLocation:string;
    extentSize:string;
    fieldImage1:string;
    fieldImage2:string;
    staffList:Staff[];
    cropList:Crop[];
    monitoringLogs: MoniteringLog[];


    constructor(fieldCode: string, fieldName: string, fieldLocation: string, extentSize: string, fieldImage1: string, fieldImage2: string, staffList: Staff[], cropList: Crop[], monitoringLogs: MoniteringLog[]) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.extentSize = extentSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
        this.staffList = staffList;
        this.cropList = cropList;
        this.monitoringLogs = monitoringLogs;
    }
}