import { URLSearchParams } from '@angular/http';

export const objToSearchParams = (obj:any, searchParms?:URLSearchParams):URLSearchParams => {
  let params = searchParms ? searchParms : new URLSearchParams();
  for (let k in obj) {
    if (obj[k]) params.append(k, obj[k]);
  }
  params.append(  'api_key', 'WAocNveiBuTTczOj9W7oqLXoVABZyu7Zbaz2cSwn');
  return params;
};
