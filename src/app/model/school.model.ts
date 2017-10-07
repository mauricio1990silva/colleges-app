import {JsonObject, JsonProperty} from 'json2typescript';


@JsonObject
export class School {
  @JsonProperty('metadata', Metadata)
  public metadata: Metadata = undefined;
  @JsonProperty('results', [SchoolName])
  public results: SchoolName [] = undefined;
}

@JsonObject
export class Metadata {
  @JsonProperty('total', Number)
  public total: number = undefined;
  @JsonProperty('page', Number)
  public page: number = undefined;
  @JsonProperty('per_page', String)
  public perPage: number = undefined;
}

@JsonObject
export class SchoolName {
  @JsonProperty('school.name', String)
  public schoolName: string = undefined;
}

