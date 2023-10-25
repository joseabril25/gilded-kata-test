import { Item } from './item';

const maximumQuality = 50;

const increaseQuality = (quality: number) => quality < maximumQuality ? quality + 1 : quality;

export const UpdateAgedBrie = (item: Item) => {
  item.quality = increaseQuality(item.quality);
  item.sellIn = item.sellIn - 1;
  return item;
}

export const UpdateBackstagePasses = (item: Item) => {
  if (item.quality <= 50) {
    if (item.sellIn === 0) {
      item.quality = 0;
    } else if (item.sellIn < 6) {
      item.quality = item.quality + 3
    } else if (item.sellIn < 11) {
      item.quality = item.quality + 2
    } else {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
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
    item.sellIn = item.sellIn - 1;
  }
  return item;
}

export const UpdateSulfuras = (item: Item) => {
  return item;
}

export const UpdateConjuredItems = (item: Item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 2
    item.sellIn = item.sellIn - 1;
  }
  return item;
}
