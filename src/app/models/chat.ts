import { Uye } from 'src/app/models/Uye';
export interface Chat {
}
import { Timestamp } from '@angular/fire/firestore';


export interface Chat {
  id: string;
  lastMessage?: string;
  lastMessageDate?: Date & Timestamp;
  userIds: string[];
  users: Uye[];

  // Not stored, only for display
  chatPic?: string;
  chatName?: string;
}

export interface Message {
  text: string;
  senderId: string;
  sentDate: Date & Timestamp;
}
