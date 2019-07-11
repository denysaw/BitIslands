# Bitmap Islands Counter
Test NodeJS task for the [FireflyLabs Ltd.](http://fireflylabs.ltd/)

## Task description
You have bitmap (binar matrix). 
The task is to count all white pixel (1) islands on that map. 
Parts of island (1-bits) should be connected to each other by sides,
means vertically and horizontally, but not diagonally. 
So for this matrix:
```
1 0 1 
1 0 0 
1 1 1
```
expected output is:
```
2
```
Because the matrix has just 2 white pixel islands. 
But script should successfully work with matrix of any dimension.

## Requirements
`npm`, `node ^8`

## Dev-dependencies [used](package.json):
`eslint`, `jest`

## Usage
To output result of matrix used in the task you should just:
```bash
node bitIslands.js
```

## Testing the application
[Jest](https://jestjs.io/) was used for the unit-testing. 

Test suite contains 10 tests with matrix of different dimensions and situations. 
Feel free to add more tests. 

To run all tests simply:
```bash
npm t
```