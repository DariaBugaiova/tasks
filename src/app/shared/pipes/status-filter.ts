import { Pipe, PipeTransform } from "@angular/core";
import { StatusType } from "../types/status";

@Pipe({
  name: 'searchFilterByStatusPipe',
})
export class SearchFilterByStatusPipe implements PipeTransform {
  transform<T>(itemList: T[], searchValue: string): T[] {
    if (!searchValue) return itemList;

    const searchString = searchValue.toLowerCase();
    return itemList.filter((item: Partial<{status: StatusType}>) => {
      return item.status?.toLowerCase() === searchString });
  }
}
