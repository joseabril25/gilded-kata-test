import { Item } from './item';

export const UpdateAgedBrie = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1
  }
  return item;
}

export const UpdateBackstagePasses = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 2
      }
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 5
      }
    }
  }
  return item;
}

export const UpdateNormalItems = (item: Item) => {
  if (item.quality < 50) {
    if(item.sellIn < 0) {
      if (item.quality === 0) {
        return item;
      } else {
        item.quality = item.quality - 2
      }
    }
  }
  return item;
}

export const UpdateSulfuras = (item: Item) => {
  return item;
}

export const UpdateConjuredItems = (item: Item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 2
  }
  return item;
}
