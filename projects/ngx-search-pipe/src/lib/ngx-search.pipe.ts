import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
	/**
	 * Filters the list of objects based on the filter value and keys provided.
	 * We can refactor this if we want to filter the whole object without specifying a property using keys.
	 *
	 * @param items List of objects to filter in
	 * @param searchValue Filter string
	 * @param filterKeys Specific keys in object for filtering
	 * @returns List of objects filtered by filter value using keys
	 */
	transform(items: any[], filterValue: string, filterKeys: string[], _args?: any): any {
		if (!items) {
			return [];
		}

		if (!filterValue || !filterKeys) {
			return items;
		}

		filterValue = filterValue.toLocaleLowerCase();

		return items.filter((item) => !!filterKeys.find((key) => item.hasOwnProperty(key) && item[key]?.toLocaleLowerCase().includes(filterValue)));
	}
}
