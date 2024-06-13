import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';

import { AppEventModel, AppResourceModel } from './models';

export const schedulerConfig: Partial<SchedulerProConfig> = {
  startDate: new Date(2024, 5, 1),
  endDate: new Date(2024, 5, 30),
  allowOverlap: true,
  fillTicks: true,
  rowHeight: 96,
  resourceMargin: 28,
  barMargin: 10,
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
      minWidth: 56,
      renderer: ({ cellElement, record }: { cellElement: HTMLElement; record: AppResourceModel }) => {
        if (!record.isGroupHeader) {
          cellElement.classList.add('crew-cell');
          return record.crew;
        }
        return '';
      },
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
