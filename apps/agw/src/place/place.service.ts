import { HttpService } from '@nestjs/axios';
import {
    Injectable,
    InternalServerErrorException,
    OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { PlaceResponse } from './response/place.response';

@Injectable()
export class PlaceService implements OnModuleInit {
    private url: string;
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {}

    async onModuleInit(): Promise<void> {
        this.url = this.configService.get<string>('PARSER_URL');
        if (!this.url) {
            throw new InternalServerErrorException('PARSER_URL is not defined');
        }
    }

    async getPlacesByCityName(name: string): Promise<PlaceResponse[]> {
        const response = await firstValueFrom(
            this.httpService.get(`${this.url}/api/fetchPlaces?name=${name}`)
        );
        return response.data;
    }

    async getPlaces(): Promise<PlaceResponse[]> {
        const response = await firstValueFrom(
            this.httpService.get(`${this.url}/api/fetchPlaces`)
        );
        return response.data;
    }
}
