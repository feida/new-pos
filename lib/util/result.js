class Base {
    constructor (){
        this.flag = "0000";
        this.msg = "";
    }
}

/**
 * @class SuccessModel
 * @param message
 * @param data
 */
class SuccessModel extends Base {
    constructor (message, data){
        super();
        this.result = Object({
            ok: true,
            message: message||"",
            data: data||""
        })
    }
}

class ErrorModel extends Base {
    constructor (message, data) {
        super();
        this.result = Object({
            ok: false,
            message: message || "",
            data: data || ""
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}