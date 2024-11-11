import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';

import { AppEventModel, AppResourceModel } from './models';

export const schedulerConfig: Partial<SchedulerProConfig> = {
  startDate: new Date(2024, 5, 1),
  endDate: new Date(2024, 5, 30),
  fillTicks: true,
  rowHeight: 96,
  resourceMargin: 28,
  resourceStore: {
    modelClass: AppResourceModel,
    sorters: [{ fn: resourceSorter }]
  },
  eventStore: {
    modelClass: AppEventModel
  },
  columns: [
    {
      field: 'crew',
      mergeCells: true,
      mergedRenderer: ({ domConfig, value }: any) => {
        domConfig.className['crew-cell'] = !!value;
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
      showMeta: (resource: AppResourceModel) => resource.description + ', ' + resource.type,
      type: 'resourceInfo'
    }
  ],
  features: {
    group: {
      field: 'workgroup',
      groupSortFn: groupSorter
    },
    mergeCells: {
      passthrough: false,
      sortedOnly: false
    },
    sort: false
  }
};

/**
 * These 2 sorters break calendar rows order on initial load
 */
function resourceSorter(a: AppResourceModel, b: AppResourceModel): number {
  // 1) Sort by crew
  if (a.crew !== b.crew) {
    return (a.crew || '').localeCompare(b.crew);
  }
  // 2) Sort by type
  if (a.type !== b.type) {
    return typeComparator(a, b);
  }
  // 3) Sort by name
  return (a.name || '').localeCompare(b.name);
}

function typeComparator(a: AppResourceModel, b: AppResourceModel): number {
  return a.type === 'typeA' && b.type === 'typeB' ? -1 : 1;
}

function groupSorter(a: AppResourceModel, b: AppResourceModel): number {
  if (!a.isGroupHeader || !b.isGroupHeader) {
    return 0;
  }
  return b.workgroup.localeCompare(a.workgroup);
}
