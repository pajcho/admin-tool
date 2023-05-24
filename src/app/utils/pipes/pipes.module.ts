import { NgModule } from '@angular/core';
import { DibDatePipe } from './date.pipe';
import { DibDashesToSpacesPipe } from './dashes-to-spaces.pipe';
import { DibCamelCaseToSpacesPipe } from './camel-case-to-spaces.pipe';
import { DibUpperFirstPipe } from './upperfirst.pipe';
import { DibDurationPipe } from './duration.pipe';
import { DibCancellationPolicyPipe } from './cancellation-policy.pipe';
import { DibPriceFormatPipe } from './price-format.pipe';

@NgModule({
  declarations: [
    DibDatePipe,
    DibDurationPipe,
    DibDashesToSpacesPipe,
    DibCamelCaseToSpacesPipe,
    DibUpperFirstPipe,
    DibCancellationPolicyPipe,
    DibPriceFormatPipe,
  ],
  exports: [
    DibDatePipe,
    DibDurationPipe,
    DibDashesToSpacesPipe,
    DibCamelCaseToSpacesPipe,
    DibUpperFirstPipe,
    DibCancellationPolicyPipe,
    DibPriceFormatPipe,
  ],
})
export class DibPipesModule {}
