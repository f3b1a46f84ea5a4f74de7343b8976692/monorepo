import { Module } from '@nestjs/common';
import { CityModule } from './city/city.module';
import { ConfigModule } from '@nestjs/config';
import { PlaceModule } from './place/place.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        CityModule,
        PlaceModule,
    ],
})
export class AppModule {}
