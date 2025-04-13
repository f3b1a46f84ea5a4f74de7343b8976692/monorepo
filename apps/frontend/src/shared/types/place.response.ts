import { ApiProperty } from '@nestjs/swagger';
import { Point } from './point.response';
import { Schedule } from './schedule.response';
export class PlaceResponse {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    fullName: string;

    @ApiProperty({ type: String })
    imageUrl: string;

    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    address: string;

    @ApiProperty({ type: String })
    rating: string;

    @ApiProperty({ type: String })
    rubrics: string;

    @ApiProperty({ type: Number })
    cityId: number;

    @ApiProperty({ type: Number })
    pointId: number;

    @ApiProperty({ type: Number })
    scheduleId: number;

    @ApiProperty({ type: Point })
    point: Point;

    @ApiProperty({ type: Schedule })
    schedule: Schedule;
}
