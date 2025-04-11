// libs/microservice/auth.grpc.options.ts
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from './constants';

export const AuthGRPCOptions: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
        protoPath: [
            join(__dirname, '../../libs/shared-types/src/auth/auth.proto'),
        ],
        package: AUTH_PACKAGE_NAME,
        url: '0.0.0.0:5000',
    },
};
