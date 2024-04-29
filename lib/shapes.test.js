const Shape = require('./shape'); // Import the module you are testing

// Describe the test suite
describe('Shape', () => {
  
  // Test case 1
  test('should calculate area correctly', () => {
    const myShape = new Shape(5, 10);
    expect(myShape.calculateArea()).toBe(50);
  });

  // Test case 2
  test('should calculate perimeter correctly', () => {
    const myShape = new Shape(5, 10);
    expect(myShape.calculatePerimeter()).toBe(30);
  });

  // Add more test cases as needed
});