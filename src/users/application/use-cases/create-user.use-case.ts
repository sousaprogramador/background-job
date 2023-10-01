import User from '../../domain/entity/user';
import { UserOutput, UserOutputMapper } from '../dto/user-output';
import Queue from '../../infra/queue';
import { default as DefaultUseCase } from '../../../@shared/application/use-cases';

export namespace CreateUserUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    async execute({ name, email }: Input): Promise<Output> {
      const user = new User({ name, email });

      //await Queue.add('RegistrationMail', { user });

      return UserOutputMapper.toOutput(user);
    }
  }

  export type Input = {
    name: string;
    email: string;
  };

  export type Output = UserOutput;
}
export default CreateUserUseCase;
