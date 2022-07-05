export class UserData {
  ref?: string;

  firstName: string;

  middleName: string;

  lastName: string;

  constructor(firstName?: string, middleName?: string, lastName?: string, ref?: string) {
    this.firstName = firstName ?? '';
    this.middleName = middleName ?? '';
    this.lastName = lastName ?? '';
  }
}

export default {};
