import { Controller, Get, Query } from '@nestjs/common';
import { PlaceService } from './place.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlaceResponse } from './response/place.response';

@ApiTags('Places')
@Controller('place')
export class PlaceController {
    constructor(private readonly service: PlaceService) {}

    @Get('all')
    @ApiOperation({ summary: 'Get list of all places' })
    @ApiResponse({
        status: 200,
        description: 'Successfully fetched cities',
        type: [PlaceResponse],
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    async getAll(): Promise<PlaceResponse[]> {
        return this.service.getPlaces();
    }

    @Get('city')
    @ApiOperation({ summary: 'Get list of all places in city' })
    @ApiResponse({
        status: 200,
        description: 'Successfully fetched cities',
        type: [PlaceResponse],
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    async getByName(@Query('city') city: string): Promise<PlaceResponse[]> {
        return this.service.getPlacesByCityName(city);
    }
}
