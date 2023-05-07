interface MenuItem {
  id: string | number;
  name: string;
  description?: string;
  category?: string;
  price?: string;
  vegetarian?: boolean;
  vegan?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  homepage?: string;
  phone?: string;
  menu: MenuItem[]
}
