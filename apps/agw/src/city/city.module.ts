import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    controllers: [CityController],
    exports: [CityService],
    providers: [CityService],
    imports: [HttpModule],
})
export class CityModule {}
