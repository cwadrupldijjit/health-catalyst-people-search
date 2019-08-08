import { Address } from './address';
import { Occupation } from './occupation';
import { Interest } from './interest';

export interface Person {
    id?: number;
    firstName: string;
    lastName: string;
    address: Address;
    occupation: Occupation;
    interests: Interest[];
    picture: string;
    email?: string;
    age: number;
    notes?: string;
}

export type PersonUpdate = Partial<Person>;
