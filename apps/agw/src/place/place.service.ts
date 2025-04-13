import { PlaceResponse } from '@aqua/shared-types';
import { HttpService } from '@nestjs/axios';
import {
    Injectable,
    InternalServerErrorException,
    OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

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
        const encodedName = encodeURIComponent(name);
        const response = await firstValueFrom(
            this.httpService.get(`${this.url}/fetchPlaces/?city=${encodedName}`)
        );
        return response.data;
    }

    async getPlaces() {
        return [
            {
                id: 1,
                name: 'Краснодар',
                description: 'Столице',
                imageUrl:
                    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Krasnodar_teatr.jpg',
                lat: 45.03547, // Исправленные координаты
                lon: 38.97607, // Исправленные координаты
            },
            {
                id: 2,
                name: 'Сочи',
                description: 'Горы',
                imageUrl:
                    'https://cdn.tripster.ru/photos/3111ac1d-f823-4254-850a-d044c0f43dd4.jpg',
                lat: 43.58518, // Исправленные координаты
                lon: 39.72021, // Исправленные координаты
            },
            {
                id: 3,
                name: 'Геленджик',
                description: 'Курорт',
                imageUrl:
                    'https://vashotel-a.akamaihd.net/0000000240723647/x300/bb5f91d94ac69898555766ccd2576e25.jpg',
                lat: 44.56117, // Исправленные координаты
                lon: 38.076455, // Исправленные координаты
            },
            {
                id: 4,
                name: 'Анапа',
                description: 'Пляжи',
                imageUrl:
                    'https://cdn.tripster.ru/thumbs2/3dd20b6a-5e6d-11ee-a16e-cac32b1340bf.1220x600.jpeg',
                lat: 44.895855, // Добавленные координаты
                lon: 37.320448, // Добавленные координаты
            },
            {
                id: 5,
                name: 'Туапсе',
                description: 'Курорты',
                imageUrl:
                    'https://vashotel-a.akamaihd.net/0000000240723647/x300/bb5f91d94ac69898555766ccd2576e25.jpg',
                lat: 44.104765, // Добавленные координаты
                lon: 39.070274, // Добавленные координаты
            },
            {
                id: 6,
                name: 'Новороссийск',
                description: 'Города',
                imageUrl:
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d5/a7/c6/caption.jpg?w=600&h=-1&s=1',
                lat: 44.726495, // Добавленные координаты
                lon: 37.764635, // Добавленные координаты
            },
        ];
    }
}
