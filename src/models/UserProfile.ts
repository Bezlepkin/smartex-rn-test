export class UserProfile {
  private _name: string;
  private _bio: string;
  private _university: string;
  private _email?: string;

  constructor(name: string, bio: string, university: string, email?: string) {
    this._name = name;
    this._bio = bio;
    this._university = university;
    this._email = email;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get bio(): string {
    return this._bio;
  }

  set bio(value: string) {
    this._bio = value;
  }

  get email(): string {
    if (this._email) {
      return this._email;
    }

    return "Email doesn't exist";
  }

  set email(value: string) {
    this._email = value;
  }

  set university(value: string) {
    this._university = value;
  }

  getUserUniversity() {
    return this._university;
  }
}
