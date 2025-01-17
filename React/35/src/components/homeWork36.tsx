/**
 * Task 1
 * @param numbers
 */
const sumArray = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0);
};

/**
 * Task 2
 */

type User = {
  name: string;
  age: number;
  isActive: boolean;
};
const createUser = (name: string, age: number, isActive = true): User => {
  console.log({ name, age, isActive });
  return { name, age, isActive };
};
const newUser = createUser('Анна', 25, true);

/**
 * Task 3
 */
enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}
const getOrderStatus = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.Pending:
      return 'Замовлення очікує на обробку';
    case OrderStatus.Shipped:
      return 'Замовлення було відправлено';
    case OrderStatus.Delivered:
      return 'Замовлення доставлено';
    case OrderStatus.Cancelled:
      return 'Замовлення скасовано';
    default:
      return 'Невідомий статус замовлення';
  }
};
const HomeWork36 = () => {
  return (
    <>
      <h2>Task 1</h2>
      <p>{sumArray([1, 2, 3, 4])}</p>
      <p>{sumArray([])}</p>
      <h2>Task 2</h2>
      <p>User name is: {newUser.name}</p>
      <p>User age is:{newUser.age}</p>
      <p>Is user active: {newUser.isActive ? 'true' : 'false'}</p>
      <h2>Task 3</h2>
      <p>{getOrderStatus(OrderStatus.Pending)}</p>
      <p>{getOrderStatus(OrderStatus.Shipped)}</p>
      <p>{getOrderStatus(OrderStatus.Delivered)}</p>
      <p>{getOrderStatus(OrderStatus.Cancelled)}</p>
    </>
  );
};

export default HomeWork36;
