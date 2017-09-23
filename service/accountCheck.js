export default class accountCheck{
    static isValidPhoneNumber(number){
        const phoneReg = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
        return phoneReg.test(number);
    };
}