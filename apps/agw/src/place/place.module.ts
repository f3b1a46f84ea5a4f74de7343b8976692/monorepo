import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [PlaceService],
    exports: [PlaceService],
    controllers: [PlaceController],
})
export class PlaceModule {}
