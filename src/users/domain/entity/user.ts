import { v4 as uuidV4 } from 'uuid';
import passwordGenerator from 'password-generator';

export type UserProperties = {
  id?: string;
  name: string;
  email: string;
  password?: string;
};

export default class User {
  private _id: string;
  private _name: string = '';
  private _email: string = '';
  private _password: string = '';

  constructor(props: UserProperties) {
    this._id = uuidV4();
    this._name = props.name;
    this._email = props.email;
    this._password = passwordGenerator(15, false);
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  toJSON(): Required<{ id: string } & UserProperties> {
    return {
      id: this.id.toString(),
      name: this.name,
      password: this.password,
      email: this.email,
    };
  }
}
