import User from '../../domain/entity/user';

export type UserOutput = {
  id: string;
  name: string;
  email: string;
};

export class UserOutputMapper {
  static toOutput(entity: User): UserOutput {
    return entity.toJSON();
  }
}
