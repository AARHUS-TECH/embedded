import { Test, TestingModule } from '@nestjs/testing';
import { HoensehusService } from './hoensehus.service';

describe('HoensehusService', () => {
  let service: HoensehusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoensehusService],
    }).compile();

    service = module.get<HoensehusService>(HoensehusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
