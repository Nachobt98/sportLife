import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class SignInDto {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export abstract class SignUpDto {
  constructor(
    firstname: string,
    lastname: string,
    username: string,
    location: string,
    password: string,
    birthdate: string,
    email?: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.location = location;
    this.password = password;
    this.email = email;
    this.birthdate = birthdate;
  }

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  username: string;

  location: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  birthdate: string;
}

export class SignUpRegisteredUserDto extends SignUpDto {
  constructor(
    firstname: string,
    lastname: string,
    username: string,
    location: string,
    password: string,
    birthdate: string,
    email?: string,
  ) {
    super(firstname, lastname, username, location, password, birthdate, email);
  }
}

/*export class SignUpNgoDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
  ) {
    super(name, username, password, email);
  }
}*/
