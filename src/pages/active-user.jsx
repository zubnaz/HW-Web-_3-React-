

export class User {
    constructor() {
        this.userIsLogin = false;
    }

    set user(obj) {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.tag = obj.tag;
        this.man_or_girl = obj.man_or_girl;
        this.day = obj.day;
        this.month = obj.month;
        this.year = obj.year;
        this.photoUrl = obj.photoUrl;
        this.description = obj.description;
        this.userIsLogin = true;
    }
    logout() {
        this.name = null;
        this.email = null;
        this.password = null;
        this.tag = null;
        this.man_or_girl = null;
        this.day = null;
        this.month = null;
        this.year = null;
        this.photoUrl = null;
        this.description = null;
        this.userIsLogin = false;
    }

}
export var activeUser = new User();
