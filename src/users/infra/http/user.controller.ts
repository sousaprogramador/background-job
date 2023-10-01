import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/use-cases';

class UserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase.UseCase();

    const user = await createUserUseCase.execute(request.body);

    return response.json(user);
  }
}

export { UserController };
