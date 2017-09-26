export default class AccountCheck{
    static isValidPhoneNumber(number){
        const phoneReg = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
        return phoneReg.test(number);
    };

    static isValidPassword(password){
        const passwordReg = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/);
        return passwordReg.test(password)
    }
}