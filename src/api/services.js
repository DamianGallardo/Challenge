import {ENV} from "../utils/constants";
import {BaseService} from "base-service-fran-dev" ;



export class Login extends BaseService{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.AUTH.LOGIN;
        super(basePath,endPoint)
    }

}

export class User extends BaseService{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.USERS_ME;
        super(basePath,endPoint)
    }

}

export class Products extends BaseService{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.PRODUCT;
        super(basePath,endPoint)
    }

}

