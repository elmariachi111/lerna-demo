export type EthAddress = string;

export class Person {
    firstName;
    lastName;
    private yob: number;
    ethAddress: EthAddress;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set birthYear(year: number) {
        this.yob = year;
    }

    get birthYear(): number {
        return this.yob;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get age(): number {
        return 2020 - this.birthYear;
    }
}