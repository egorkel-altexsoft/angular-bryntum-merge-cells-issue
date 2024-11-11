import { AfterViewInit, ChangeDetectionStrategy, Component, signal, ViewChild } from '@angular/core';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumSchedulerProComponent, BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular-thin';
import { SchedulerProConfig } from '@bryntum/schedulerpro-thin';

import { events, resources } from './data';
import { schedulerConfig } from './scheduler-config';

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
  protected readonly calendarActive = signal(true);

  public ngAfterViewInit(): void {
    this.#loadData();
  }

  protected toggleCalendar(): void {
    this.calendarActive.update(val => !val);
    if (this.calendarActive()) {
      setTimeout(() => this.#loadData(), 10);
    }
  }

  #loadData(): void {
    this.scheduler.instance.mask('Loading...')
    setTimeout(() => this.#addEvents(), 1000);
  }

  #addEvents(): void {
    this.scheduler.instance.resourceStore.add(resources);
    this.scheduler.instance.eventStore.add(events);
    this.scheduler.instance.unmask();
  }
}
