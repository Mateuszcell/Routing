import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      id: this.rout.snapshot.params['id'],
      name: this.rout.snapshot.params['name']
    };
    this.paramsSubscription = this.rout.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

  }

  ngOnDestroy() {
this.paramsSubscription.unsubscribe();

  }

}
