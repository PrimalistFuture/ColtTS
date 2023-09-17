// Tuples

// defining the structure and initializing
let firstTuple: [number, string];
// assignment
firstTuple = [10, 'cool'];
// TS mad, ORDER MATTERS
firstTuple = ['cool', 10];

// another way of initializing a tuple
const color: [number, number, number] = [255, 0, 244];

// tuple as a custom type
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
// an array of the custom tuple type
const responses: HTTPResponse[] = [[400, 'Not Found'], [200, 'OK'], [301, 'Redirected']];


// Enums

// hover over OrderStatus to see the number assigned.
enum OrderStatus {
    PENDING,
    SHIPPED,
    RETURNED,
    DELIVERED,
}
// will return the assigned number
const customerStatus = OrderStatus.DELIVERED;

// func parameter must be of OrderStatus type. 
// Doing this rather that status === 3 or whatever delivered was assigned allows us to not write more flexible code that doesn't need to be changed if OrderStatus.DELIVERED changed.
function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}