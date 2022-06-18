import { Controller, Body, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ROUTES } from 'src/common/routes';
import { capitalizeInitials } from 'src/utils';
import { UnauthorizedError, ValidationError } from 'src/common/errors';
import { SessionService } from './session.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { Action } from 'src/common/constant';
import { Session } from './session.schema';

@ApiTags(capitalizeInitials(ROUTES.session.name))
@Controller(ROUTES.session.route)
export class SessionController {
  constructor(
    private readonly sessionService: SessionService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

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

    const ability = this.caslAbilityFactory.createForUser(req.user);
    if (!ability.can(Action.Update, Session)) {
      throw new UnauthorizedError();
    }

    return await this.sessionService.revokeUser(body.email);
  }
}
