import { BadRequestException, Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CityResponse } from './response/city.response';

@ApiTags('City')
@Controller('city')
export class CityController {
    constructor(private readonly service: CityService) {}

    @Get('all')
    @ApiOperation({ summary: 'Get list of all cities' })
    @ApiResponse({
        status: 200,
        description: 'Successfully fetched cities',
        type: [CityResponse],
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    async getCities(): Promise<CityResponse[]> {
        return await this.service.getCities();
    }

    @Get('sync')
    @ApiOperation({ summary: 'Синхронизация городов' })
    async sync() {
        return await this.service.fetchCities();
    }
}
