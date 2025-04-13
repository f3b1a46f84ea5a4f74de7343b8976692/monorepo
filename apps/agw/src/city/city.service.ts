import {
    Injectable,
    InternalServerErrorException,
    OnModuleInit,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { CityResponse } from '@aqua/shared-types';

const cities = [
    {
        title: 'Краснодар',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Krasnodar_teatr.jpg',
    },
    {
        title: 'Сочи',
        image: 'https://cdn.tripster.ru/photos/3111ac1d-f823-4254-850a-d044c0f43dd4.jpg',
    },
    {
        title: 'Геленджик',
        image: 'https://cdn.tripster.ru/thumbs2/e2fa5262-4bd7-11ee-8656-d6c2bdfda223.1220x600.jpeg',
    },
    {
        title: 'Анапа',
        image: 'https://cdn.tripster.ru/thumbs2/3dd20b6a-5e6d-11ee-a16e-cac32b1340bf.1220x600.jpeg',
    },
    {
        title: 'Туапсе',
        image: 'https://vashotel-a.akamaihd.net/0000000240723647/x300/bb5f91d94ac69898555766ccd2576e25.jpg',
    },
    {
        title: 'Лоо',
        image: 'https://guide-tours.ru/wp-content/uploads/2023/03/lazarevskoe-ili-loo-jpg.webp',
    },
    {
        title: 'Ейск',
        image: 'https://sutochno.ru/doc/images/galleries/182/eysk2.jpg',
    },
    {
        title: 'Новороссийск',
        image: 'https://tripplanet.ru/wp-content/uploads/europe/russia/novorossiysk/dostoprimechatelnosti-novorossijska.jpg',
    },
    {
        title: 'Армавир',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/%D4%B1%D6%80%D5%B4%D5%A1%D5%BE%D5%AB%D6%80%D5%AB_%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6_%D5%B0%D6%80%D5%A1%D5%BA%D5%A1%D6%80%D5%A1%D5%AF.jpg',
    },
];

@Injectable()
export class CityService implements OnModuleInit {
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

    async fetchCities() {
        try {
            for (const city of cities) {
                const message = {
                    image: city.image,
                    title: city.title,
                    description: 'string',
                    options: ['string'],
                    category: 'string',
                    price: 'string',
                    places: [],
                };
                this.httpService.post(`${this.url}/api/city`, message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async createCity(title: string, image: string): Promise<void> {
        const message = {
            image: 'string',
            title,
            description: 'string',
            options: ['string'],
            category: 'string',
            price: 'string',
            places: [],
        };

        try {
            await this.httpService
                .post(`${this.url}/api/city`, message)
                .toPromise();
        } catch (error) {
            throw new InternalServerErrorException(
                'Failed to create city',
                error.message
            );
        }
    }

    // Метод для получения списка городов
    async getCities(): Promise<CityResponse[]> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`${this.url}/api/city`)
            );
            return response.data;
        } catch (error) {
            throw new InternalServerErrorException(
                'Failed to fetch cities',
                error.message
            );
        }
    }
}
