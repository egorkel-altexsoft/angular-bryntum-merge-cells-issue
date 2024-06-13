import { ResourceModel, ResourceModelConfig } from '@bryntum/schedulerpro-thin';

export interface ResourceModelCustomFields {
  crew: string;
  description: string;
  workgroup: string;
}

export type AppResourceModelConfig = Partial<ResourceModelConfig & ResourceModelCustomFields>;

export class AppResourceModel extends ResourceModel implements ResourceModelCustomFields {
  static get $name() {
    return 'AppResourceModel';
  }

  static override get fields() {
    return [
      {
        name: 'crew',
        type: 'string'
      },
      {
        name: 'description',
        type: 'string'
      },
      {
        name: 'workgroup',
        type: 'string'
      }
    ];
  }

  public declare crew: string;
  public declare description: string;
  public declare id: string;
  public declare workgroup: string;
}
