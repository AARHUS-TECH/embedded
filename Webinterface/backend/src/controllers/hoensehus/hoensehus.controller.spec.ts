import { Test, TestingModule } from '@nestjs/testing';
import { HoensehusController } from './hoensehus.controller';

describe('HoensehusController', () => {
  let controller: HoensehusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoensehusController],
    }).compile();

    controller = module.get<HoensehusController>(HoensehusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
