import { OrderStatus } from "@/services/types";

export const DISHES = [
  "Udon",
  "Sushi",
  "Pancakes",
  "Vege Tortillia",
  "Salad bowl",
  "Pokebowl",
  "Hamburger",
  "Cheeseburger",
  "Cake",
  "Chicken Soup",
];

export const DISHES_FULL = [
  { id: "1", dish: "Udon", availiable: true },
  { id: "2", dish: "Sushi", availiable: true },
  { id: "3", dish: "Pancakes", availiable: false },
];

export const YOUR_ORDERS = [
  {
    id: "order-id-1",
    dish: "Udon",
    date: new Date().toISOString(),
    status: OrderStatus.ACCEPTED,
  },
  {
    id: "order-id-2",
    dish: "Spaghetti",
    date: new Date().toISOString(),
    status: OrderStatus.COMPLETED,
  },
  {
    id: "order-id-3",
    dish: "Cheeseburger",
    date: new Date().toISOString(),
    status: OrderStatus.PENDING,
  },
  {
    id: "order-id-4",
    dish: "Bao bun",
    date: new Date().toISOString(),
    status: OrderStatus.REJECTED,
  },
];

export const SUPPLIER_ORDERS = [
  {
    id: "order-id-1",
    dish: "Udon",
    date: new Date().toISOString(),
  },
  {
    id: "order-id-2",
    dish: "Spaghetti",
    date: new Date().toISOString(),
  },
  {
    id: "order-id-3",
    dish: "Cheeseburger",
    date: new Date().toISOString(),
  },
  {
    id: "order-id-4",
    dish: "Bao bun",
    date: new Date().toISOString(),
  },
];
