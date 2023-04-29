import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class SignInDto {
  constructor(usernameOrEmail: string, password: string) {
    this.usernameOrEmail = usernameOrEmail;
    this.password = password;
  }

  @IsNotEmpty()
  usernameOrEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export abstract class SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
  ) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;
}

export class SignUpRegisteredUserDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
  ) {
    super(name, username, password, email);
  }
}

export class SignUpNgoDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
  ) {
    super(name, username, password, email);
  }
}
