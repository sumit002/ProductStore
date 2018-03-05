import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';

@NgModule({
	declarations: [SearchPipe],
	imports: [],
	exports: [SearchPipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: [],
		};
	 }
}
