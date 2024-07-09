import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';

import { AppEventModel, AppResourceModel } from './models';

export const schedulerConfig: Partial<SchedulerProConfig> = {
  startDate: new Date(2024, 5, 1),
  endDate: new Date(2024, 5, 30),
  fillTicks: true,
  rowHeight: 96,
  resourceStore: {
    modelClass: AppResourceModel
  },
  eventStore: {
    modelClass: AppEventModel
  },
  columns: [
    {
      field: 'crew',
      mergeCells: true,
      mergedRenderer: ({ domConfig, value, record }: any) => {
        domConfig.className['crew-cell'] = !!value && !record.isGroupHeader;
      },
      minWidth: 56,
      resizable: false,
      width: 56
    },
    {
      field: 'name',
      minWidth: 280,
      resizable: false,
      showEventCount: false,
      showMeta: (resource: AppResourceModel) => resource.description,
      type: 'resourceInfo'
    }
  ],
  features: {
    group: {
      field: 'workgroup'
    },
    mergeCells: {
      sortedOnly: false
    },
    sort: false
  }
};
