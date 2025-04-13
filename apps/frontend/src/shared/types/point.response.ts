import { ApiProperty } from '@nestjs/swagger';

export class Point {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: Number })
    lon: number;

    @ApiProperty({ type: Number })
    lat: number;
}
