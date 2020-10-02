type AddressData = {
  address: string;
};

type OrderRequest = {
  points: AddressData[];
};

type OrderResponse = {
  is_successful: boolean;
  points: {
    address: string;
  }[];
  price: number;
  nonce: number;
};

let nonce = 0;
let lastPrice = 0;

const calculateOrder = async (request: OrderRequest): Promise<OrderResponse> => {
  // eslint-disable-next-line no-plusplus
  const localNonce = nonce++;
  lastPrice = Math.ceil(Math.random() * 400 + 100);
  const localPrice = lastPrice;
  console.log(`Calculate requested ${localNonce}`, request);

  return new Promise((resolve) => {
    setTimeout(() => {
      const result: OrderResponse = {
        is_successful: true,
        points: request.points.map((address) => ({ address: address.address })),
        price: localPrice,
        nonce: localNonce,
      };
      console.log(`Calculate result ${localNonce}`, result);

      resolve(result);
    }, Math.random() * 5000);
  });
};

const createOrder = async (request: OrderRequest): Promise<OrderResponse> => {
  // eslint-disable-next-line no-plusplus
  const localNonce = nonce++;
  console.log(`Create order requested ${localNonce}`, request);

  return new Promise((resolve) => {
    setTimeout(() => {
      const result: OrderResponse = {
        is_successful: true,
        points: request.points.map((address) => ({ address: address.address })),
        price: lastPrice,
        nonce: localNonce,
      };
      console.log(`Create order result ${localNonce}`, result);

      resolve(result);
    }, Math.random() * 500);
  });
};

export { calculateOrder, createOrder };
