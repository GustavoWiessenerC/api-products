
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.HOST,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true
    }),
    ProductModule,
    HealthModule,
  ],
})
export class AppModule {}
