export type TMain = {
  id: number;
  img: string;
  title: string;
  price: string;
};

export type TProducts = {
  product_id: number;
  title: string;
  image_preview: string;
  old_price: string | null;
  price: string;
  description: string;
  category: string;
};

export type TMainApi = {
  firstRowMainBg: TProducts[];
  secondRowMainBg: TProducts[];
  firstCarousel: TProducts[];
  secondCarousel: TProducts[];
};
