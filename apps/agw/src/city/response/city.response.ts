import { ApiProperty } from '@nestjs/swagger';
import { PlaceResponse } from '../../place/response/place.response';

export class CityResponse {
    @ApiProperty({ type: String })
    id: number;

    @ApiProperty({ type: String })
    image: string;

    @ApiProperty({ type: String })
    title: string;

    @ApiProperty({ type: String })
    description: string;

    @ApiProperty({ type: [String] })
    options: string[];

    @ApiProperty({ type: String })
    category: string;

    @ApiProperty({ type: String })
    price: string;

    @ApiProperty({ type: [PlaceResponse] })
    places: PlaceResponse[];
}
