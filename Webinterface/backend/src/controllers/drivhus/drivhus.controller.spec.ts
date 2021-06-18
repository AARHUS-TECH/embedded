import { Test, TestingModule } from '@nestjs/testing';
import { DrivhusController } from './drivhus.controller';

describe('DrivhusController', () => {
  let controller: DrivhusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrivhusController],
    }).compile();

    controller = module.get<DrivhusController>(DrivhusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
