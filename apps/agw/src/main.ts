import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable Swagger
    const config = new DocumentBuilder()
        .setTitle('AGW API')
        .setDescription('The AGW API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // CORS Configuration
    app.enableCors({
        origin: ['http://localhost:4200'],
        credentials: true,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        exposedHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
    });

    // Global pipes for validation
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            exceptionFactory: (errors) => {
                const messages = errors.map(
                    (error) => `${Object.values(error.constraints).join(', ')}`
                );
                return new BadRequestException({
                    statusCode: 400,
                    message: messages,
                    error: 'Validation Error',
                });
            },
        })
    );

    // Cookie Parser middleware
    app.use(cookieParser());

    await app.listen(3000);
}

bootstrap();
