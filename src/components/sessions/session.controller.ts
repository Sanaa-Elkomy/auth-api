import { Controller, Body, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ROUTES } from 'src/common/routes';
import { capitalizeInitials } from 'src/utils';
import { ValidationError } from 'src/common/errors';
import { SessionService } from './session.service';
import { Roles } from 'src/common/constant';
import { Authorization } from 'src/common/authorization';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags(capitalizeInitials(ROUTES.session.name))
@Controller(ROUTES.session.route)
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @ApiBody({
    schema: {
      example: { email: 'test@gmail.com' },
    },
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('revoke')
  async revokeUser(
    @Request() req,
    @Body() body: { email: string },
  ): Promise<any> {
    if (!body.email) {
      new ValidationError(null, `Email field is required`);
    }

    Authorization.authorize(req.user, [Roles.SUPER_ADMIN, Roles.ADMIN]);

    return await this.sessionService.revokeUser(body.email);
  }
}
