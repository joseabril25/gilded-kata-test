import { Item } from "./item";
import { UpdateAgedBrie, UpdateBackstagePasses, UpdateConjuredItems, UpdateNormalItems, UpdateSulfuras } from "./update";


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    this.items.map(item => {
      if(item.name === 'Aged Brie') {
        item = UpdateAgedBrie(item);
      } else if (item.name.includes('Backstage')) {
        item = UpdateBackstagePasses(item);
      } else if (item.name.includes('Conjured')) {
        item = UpdateConjuredItems(item);
      } else if (item.name.includes('Sulfuras')) {
        item = UpdateSulfuras(item);
      } else {
        item = UpdateNormalItems(item);
      }
    });

    return this.items;
  }
}
