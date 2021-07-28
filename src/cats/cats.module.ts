import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatInMemoryService } from './cats.service';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatInMemoryService],
})
export class CatsModule {}
