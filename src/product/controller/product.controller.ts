import { Controller, Post, Get, Body, HttpException, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) 
  @ApiBody({ type: CreateProductDto }) 
  @ApiOperation({ summary: 'Create a new product' }) 
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productService.createProduct(createProductDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }


  @Get()
  @ApiOperation({ summary: 'Get all products' }) 
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }
}
