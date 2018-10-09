import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-completed-jobs',
  templateUrl: './completed-jobs.component.html',
  styleUrls: ['./completed-jobs.component.css']
})
export class CompletedJobsComponent implements OnInit {
  jobs: Array<any>;
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  complain(){
    
  }

}
