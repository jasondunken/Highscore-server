import { Test, TestingModule } from '@nestjs/testing';
import { ControllerOneController } from './controller-one.controller';

describe('ControllerOneController', () => {
  let controller: ControllerOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerOneController],
    }).compile();

    controller = module.get<ControllerOneController>(ControllerOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
