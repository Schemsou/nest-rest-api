import { Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAllItems(): string {
    return 'get all items';
  }

  @Post()
  createItem(): string {
    return 'get items';
  }
}
