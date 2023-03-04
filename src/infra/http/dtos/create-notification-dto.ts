import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateNotificationDTO {
  @IsUUID('4')
  @IsString()
  @IsNotEmpty()
  recipientId: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  @IsNotEmpty()
  category: string;
}
