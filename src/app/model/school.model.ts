import {JsonObject, JsonProperty} from 'json2typescript';


@JsonObject
export class School {
  @JsonProperty('metadata', Metadata)
  public metadata: Metadata = undefined;
  @JsonProperty('results', [SchoolCard])
  public results: SchoolCard [] = undefined;
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
export class SchoolCard {
  @JsonProperty('id', Number)
  public id?: string = undefined;
  @JsonProperty('school.name', String)
  public schoolName?: string = undefined;
  @JsonProperty('2013.earnings.10_yrs_after_entry.median', Number)
  public earningsMedian?: number = undefined;
  @JsonProperty('2013.earnings.6_yrs_after_entry.percent_greater_than_25000', Number)
  public earningsGreaterThan25000?: number = undefined;
  @JsonProperty('school.degrees_awarded.predominant', Number)
  public schoolDegreeAwardedPredominant?: number = undefined;
  @JsonProperty('school.state', String)
  public schoolState?: string = undefined;
  @JsonProperty('2015.student.size', Number)
  public schoolStudentSize?: number = undefined;
  @JsonProperty('school.under_investigation', Number)
  public schoolUnderInvestigation?: number = undefined;
  @JsonProperty('school.city', String)
  public schoolCity?: string = undefined;
  @JsonProperty('school.ownership', Number)
  public schoolOwnership?: number = undefined;
  @JsonProperty('2015.cost.avg_net_price.overall', Number)
  public schoolCostAvg?: number = undefined;
  @JsonProperty('2015.completion.rate_suppressed.overall', Number)
  public schoolCompletionRate?: number = undefined;

}

