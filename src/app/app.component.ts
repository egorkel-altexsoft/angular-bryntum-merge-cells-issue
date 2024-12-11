import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumSchedulerProComponent, BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular-thin';
import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';
import { addDays, differenceInDays } from 'date-fns';

import { resources } from './data';
import { AppEventModelConfig, AppEventType } from './models';
import { endDate, schedulerConfig, startDate } from './scheduler-config';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BryntumGridModule, BryntumSchedulerModule, BryntumSchedulerProModule],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BryntumSchedulerProComponent) protected readonly scheduler!: BryntumSchedulerProComponent;

  protected readonly config: Required<SchedulerProConfig> = schedulerConfig as Required<SchedulerProConfig>;

  public ngAfterViewInit(): void {
    this.#addResources();
  }

  protected addEvents(): void {
    this.#addEvents();
  }

  #addResources(): void {
    this.scheduler.instance.suspendRefresh();
    this.scheduler.instance.resourceStore.add(resources);
    this.scheduler.instance.resumeRefresh(true);
  }

  #addEvents(): void {
    const events = this.#getEvents();
    this.scheduler.instance.suspendRefresh();
    this.scheduler.instance.eventStore.removeAll();
    this.scheduler.instance.eventStore.add(events);
    this.scheduler.instance.resumeRefresh(true);
  }

  #getEvents(): AppEventModelConfig[] {
    const eventsCount = 30;
    const resourcesCount = resources.length;
    const daysInterval = differenceInDays(endDate, startDate);
    const events: AppEventModelConfig[] = [];
    for (let i = 0; i < eventsCount; i++) {
      const resource = Math.round(Math.random() * resourcesCount);
      const day = Math.round(Math.random() * daysInterval);
      const start = addDays(startDate, day);
      const end = addDays(start, 1);
      events.push({
        id: `${i + 1}.1`,
        name: `Event ${i + 1}.1`,
        resourceId: `${resource}`,
        startDate: start,
        endDate: end,
        type: AppEventType.event
      });
      events.push({
        id: `${i + 1}.2`,
        name: `Event ${i + 1}.2`,
        resourceId: `${resource}`,
        startDate: start,
        endDate: end,
        type: AppEventType.event
      });
    }
    return events;
  }
}
