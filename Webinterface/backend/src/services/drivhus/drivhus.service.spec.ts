import { Test, TestingModule } from '@nestjs/testing';
import { DrivhusService } from './drivhus.service';

describe('DrivhusService', () => {
  let service: DrivhusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrivhusService],
    }).compile();

    service = module.get<DrivhusService>(DrivhusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
