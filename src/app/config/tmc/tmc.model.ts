import { Injectable } from '@angular/core';
import { Adapter } from '../../models/adapter';

export interface Tmc {
  id: string;
  name: string;
  logo?: string;
  logoInverted?: string;
  headline?: string;
  platformLink: string;
  adminLink: string;
}

export interface TmcApiObject {
  key: string;
  name: string;
  config: Record<string, any>;
  topLevelDomainCW: string;
  topLevelDomainTMCC: string;
}

export class TmcModel implements Tmc {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
    public logoInverted: string,
    public headline: string,
    public platformLink: string,
    public adminLink: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TmcAdapter implements Adapter<Tmc> {
  adapt(item: Tmc): TmcModel {
    return new TmcModel(
      item?.id,
      item?.name,
      item?.logo,
      item?.logoInverted,
      item?.headline,
      item?.platformLink,
      item?.adminLink
    );
  }
}
