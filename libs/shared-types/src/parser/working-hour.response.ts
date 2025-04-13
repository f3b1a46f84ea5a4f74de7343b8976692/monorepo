import { ApiProperty } from '@nestjs/swagger';

export class WorkingHour {
    @ApiProperty({ type: String })
    id: string;

    @ApiProperty({ type: String })
    from: string;

    @ApiProperty({ type: String })
    to: string;
}
