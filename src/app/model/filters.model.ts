export const degrees = [
  {value: '', viewValue: 'any'},
  {value: 'a', viewValue: "Two-year(Associate's)"},
  {value: 'b', viewValue: "Four-year(Bachelor's)"},
];

export const programs = [
  {value: '', viewValue: 'any'},
  {value: 'agriculture', viewValue: 'Agriculture, Agriculture Operations, and Related Sciences'},
  {value: 'architecture', viewValue: 'Architecture, and Related Services'},
  {value: 'engineering', viewValue: 'Engineering'},
];

export const states = [
  {value: 'VA', viewValue: 'Wirginia', isSelected: false},
  {value: 'DC', viewValue: 'Washington DC', isSelected: false},
  {value: 'MD', viewValue: 'Maryland', isSelected: false}
];

export const statesStrings = ['Florida', 'Maryland'];

export const schoolNames = ['University of Maryland', 'Virginia Tech'];

export const schoolSizes = [
  {value: 'small', viewValue: 'Small (< 2,000)'},
  {value: 'medium', viewValue: 'Medium (2,000–15,000)'},
  {value: 'large', viewValue: 'Large (> 15,000)'}
];

export const schoolTypes = [
  {value: 'public', viewValue: 'Public'},
  {value: 'private', viewValue: 'Private Nonprofit'},
  {value: 'profit', viewValue: 'Private For-profit'}
];

export const missions = [
  {value: 'public', viewValue: 'Women-Only'},
  {value: 'private', viewValue: 'Men-Only'},
  {value: 'profit', viewValue: 'Private For-profit'}
];

export const religions = [
  {value: '52', viewValue: 'American Baptist'},
  {value: '80', viewValue: 'Jewish'},
  {value: '30', viewValue: 'Roman Catholic'}
];


export const defaultQueryParams = {
  'sort': '2013.earnings.6_yrs_after_entry.percent_greater_than_25000:desc',
  'school.operating': '1',
  '2015.student.size__range': '1..',
  'school.degrees_awarded.predominant__range': '1..3',
  'school.degrees_awarded.highest__range': '2..4',
  'fields': 'id,school.name,school.city,school.state,2015.student.size,school.ownership,school.degrees_awarded.predominant,2015.cost.avg_net_price.overall,2015.completion.rate_suppressed.overall,2013.earnings.10_yrs_after_entry.median,2013.earnings.6_yrs_after_entry.percent_greater_than_25000,school.under_investigation',
};
