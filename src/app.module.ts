import { Controller, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationLevelService } from './domain/services/education-level.service';
import { ModelsModule } from './domain/models/models.module' 
import { ControllerModule } from './controller/controller.module';
import { educationLevelProviders } from './providers/EducationLevel.provider'
import { DatabaseModule } from './database/database.module';

@Module({

  imports: [
    DatabaseModule,
    ControllerModule
  ],
  controllers: [AppController],
  providers: [AppService, EducationLevelService , DatabaseModule, AppController]
})
export class AppModule {}
