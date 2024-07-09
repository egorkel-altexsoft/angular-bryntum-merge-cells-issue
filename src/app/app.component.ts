import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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

  public ngAfterViewInit(): void {
    this.scheduler.instance.resourceStore.add(resources);
    this.#addEvents();
  }

  protected removeEvents(): void {
    this.scheduler.instance.eventStore.removeAll();
  }

  #addEvents(): void {
    this.scheduler.instance.eventStore.add(events);
  }
}
