import { IsNotEmpty, IsString, IsNumber, MinLength, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', minLength: 3, type: String, example: 'Produto A' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ description: 'Descrição do produto', minLength: 10, maxLength: 100, type: String, example: 'Descrição do Produto A' })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(100)
  description: string;

  @ApiProperty({ description: 'Preço do produto', minimum: 1, type: Number, example: 2599 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;
}
