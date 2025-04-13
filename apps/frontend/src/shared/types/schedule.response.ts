import { ApiProperty } from '@nestjs/swagger';
import { WorkingHour } from './working-hour.response';

export class Schedule {
    @ApiProperty({ type: String })
    id: string;

    @ApiProperty({ type: [WorkingHour] })
    working_hours: WorkingHour[];
}
