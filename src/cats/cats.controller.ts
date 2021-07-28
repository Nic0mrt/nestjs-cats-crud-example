import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatInMemoryService } from './cats.service';
import { InsertOneDTO } from './dtos/insertOneDTO';
import { UpdateOneDTO } from './dtos/updateOneDTO';
import { Cat } from './interfaces/cat';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatInMemoryService) {}

  @Get()
  getAll(): Promise<Cat[]> {
    return this.catService.getAll();
  }

  @Post()
  insertOne(@Body() inserOneDTO: InsertOneDTO): Promise<Cat> {
    return this.catService.insertOne(inserOneDTO);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateOneDTO: UpdateOneDTO) {
    return this.catService.updateOne(id, updateOneDTO);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<void> {
    return this.catService.deleteOne(id);
  }
}
