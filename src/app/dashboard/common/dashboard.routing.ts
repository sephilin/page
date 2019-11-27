import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { DataSourceJsonResolver } from 'src/app/core/resolver/dataSourceJson.resolver';


const DashboardRoutingRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            dataSourceJson: DataSourceJsonResolver		      
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutingRoutes)],
    exports: [RouterModule],
    providers: [	
        DataSourceJsonResolver	
    ]
})

export class DashboardRouting {
    
}   