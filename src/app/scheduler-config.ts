import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';

import { AppEventModel, AppResourceModel } from './models';

export const schedulerConfig: Partial<SchedulerProConfig> = {
  allowOverlap: true,
  fillTicks: true,
  zoomOnMouseWheel: false,
  zoomOnTimeAxisDoubleClick: false,
  useInitialAnimation: false,
  transitionDuration: 0,
  createEventOnDblClick: false,
  enableDeleteKey: false,
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
      filterable: false,
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
      text: '',
      width: 56
    },
    {
      field: 'name',
      filterable: false,
      minWidth: 280,
      resizable: false,
      showEventCount: false,
      showMeta: (resource: AppResourceModel) => resource.description,
      text: '',
      type: 'resourceInfo'
    }
  ],
  features: {
    cellEdit: false,
    eventDrag: {
      copyKey: '',
      showTooltip: false
    },
    eventDragCreate: false,
    eventMenu: false,
    eventResize: {
      showTooltip: false
    },
    group: {
      field: 'workgroup',
      renderer: ({ groupRowFor, isFirstColumn }) => (isFirstColumn ? groupRowFor : '')
    },
    mergeCells: {
      sortedOnly: false
    },
    scheduleMenu: false,
    sort: false,
    timeRanges: {
      showCurrentTimeLine: {
        cls: 'current-time-line'
      }
    },
    eventEdit: false,
    cellMenu: false,
    headerMenu: false,
    timeAxisHeaderMenu: false,
    scheduleTooltip: false
  }
};
