import * as _ from 'lodash';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Action, Roles } from 'src/common/constant';
import { User } from 'src/components/users/users.schema';
import { Session } from 'src/components/sessions/session.schema';

type Subjects = InferSubjects<typeof Session | typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>,
    );

    if (_.includes(user.roles, Roles.ADMIN)) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can([Action.Read, Action.Update], User); // read-update access to everything
    }

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
