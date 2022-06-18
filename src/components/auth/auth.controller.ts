import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './auth.dto';
import { ROUTES } from 'src/common/routes';
import { capitalizeInitials } from 'src/utils';
import { validateLogin } from './auth.validation';
import { ValidationError } from 'src/common/errors';

@ApiTags(capitalizeInitials(ROUTES.auth.name))
@Controller(ROUTES.auth.route)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const isValid = validateLogin(loginDto);
    if (!isValid) {
      new ValidationError(null, validateLogin.errors);
    }
    return await this.authService.login(loginDto);
  }
}
