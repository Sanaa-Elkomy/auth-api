import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({ required: true })
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly roles: string[];
}
