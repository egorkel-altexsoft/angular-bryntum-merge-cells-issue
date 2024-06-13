import { EventModel, EventModelConfig } from '@bryntum/schedulerpro-thin';

export interface EventModelCustomFields {
  type: AppEventType;
}

export enum AppEventType {
  assignment = 'assignment',
  event = 'event'
}

export type AppEventModelConfig = Partial<EventModelConfig & EventModelCustomFields>;

export class AppEventModel extends EventModel implements EventModelCustomFields {
  static get $name() {
    return 'AppEventModel';
  }

  static override get fields() {
    return [
      {
        name: 'durationUnit',
        defaultValue: 'hour'
      },
      {
        name: 'resourceIds',
        persist: true
      },
      {
        name: 'type',
        type: 'string'
      }
    ];
  }

  public declare endDate: Date;
  public declare id: string;
  public declare resourceId: string;
  public declare resourceIds: string[];
  public declare startDate: Date;
  public declare type: AppEventType;
}
