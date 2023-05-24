import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Config } from '../config';
import { Tmc, TmcApiObject } from '../config/tmc';
import { cache } from '../interceptors/cache.interceptor';

@Injectable()
export class TenantService {
  private baseUrl = `${environment.api.dtms}/api`;
  private baseUrlSecure = `${environment.api.dtms}/api`;

  constructor(private http: HttpClient) {}

  getConfig(): Observable<Config> {
    return this.http
      .get<Partial<{ data: TmcApiObject }>>(`${this.baseUrl}/tenant/config`)
      .pipe(map(({ data }): Config => ({ tmc: this.mapTmcResponseObject(data) })));
  }

  getPrimaryTenants(): Observable<Tmc[]> {
    return this.http.get<Partial<{ data: TmcApiObject[] }>>(`${this.baseUrlSecure}/tenants`, { context: cache() }).pipe(
      map(({ data }): Tmc[] => {
        return data.map((tenant) => this.mapTmcResponseObject(tenant));
      })
    );
  }

  private mapTmcResponseObject(tenant: TmcApiObject): Tmc {
    return {
      id: tenant.key,
      name: tenant.name,
      logo: tenant.config?.tmc?.logo,
      logoInverted: tenant.config?.tmc?.logoInverted,
      headline: tenant.config?.tmc?.headline,
      platformLink: tenant.topLevelDomainCW,
      adminLink: tenant.topLevelDomainTMCC,
    };
  }
}
