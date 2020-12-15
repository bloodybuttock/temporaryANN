import { Roles } from './role';

export class User {
    id: number;
    username:string;
    email:string;
    password:string;
    fullname:string;
    birthdate:Date;
    phonenumber:number;
    picture:string;
    subdistrict:number;
    verifyingToken:string;
    role: Roles;
    token?: string;
  }
