import { Captcha } from '../captcha/captcha.model';

export interface User {
    email: string;
    password: string;
    companyName: string;
    token: string;
    npwp: string;
    captcha?: Captcha;
}