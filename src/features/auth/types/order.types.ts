// types/order.types.ts
export interface OrderItem {
  name: string;
  quantity: number;
  total: string;
}

export interface Order {
  id: number;
  date_created: string;
  total: string;
  status: string;
  shipping: {
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    phone: string;
  };
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    email: string;
    phone: string;
  };
  items: Record<string, OrderItem>; // Object با key های string
}
export type OrdersResponse = Order[];
