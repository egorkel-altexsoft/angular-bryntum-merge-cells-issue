import { AppEventModelConfig, AppEventType } from '../models';

export const events: AppEventModelConfig[] = [
  {
    id: '1',
    name: 'Assignment 1',
    resourceId: '10',
    startDate: new Date(2024, 5, 1, 8),
    endDate: new Date(2024, 5, 3, 12),
    type: AppEventType.assignment
  },
  {
    id: '2',
    name: 'Assignment 2',
    resourceId: '10',
    startDate: new Date(2024, 5, 1, 10),
    endDate: new Date(2024, 5, 2, 10),
    type: AppEventType.assignment
  },
  {
    id: '3',
    name: 'Event 1',
    resourceId: '10',
    startDate: new Date(2024, 5, 1, 8),
    endDate: new Date(2024, 5, 3, 16),
    type: AppEventType.event
  },
  {
    id: '4',
    name: 'Assignment 3',
    resourceId: '11',
    startDate: new Date(2024, 5, 1, 10),
    endDate: new Date(2024, 5, 2, 10),
    type: AppEventType.assignment
  },
  {
    id: '5',
    name: 'Event 2',
    resourceId: '11',
    startDate: new Date(2024, 5, 1, 8),
    endDate: new Date(2024, 5, 3, 16),
    type: AppEventType.event
  }
];
