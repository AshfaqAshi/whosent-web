export class User{
    userId:string;
    mobileNo:string;
    reason:string;

    constructor(userid,mobileno,reason){
        this.userId=userid;
        this.mobileNo=mobileno;
        this.reason=reason;
    }
}