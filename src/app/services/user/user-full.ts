import { Role } from '../role/role.model';

export interface UserFull {
    id: number;
    email: string;
    password: string;
    companyName: string;
    token: string;
    npwp: string;
    roles: Role[];
    activated: boolean;
    activationHash: string;
}