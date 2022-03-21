# Image Processing Api

#### It will resize the choosing image .

#### Optional It will change the Image format .

## Installation

##### Install the required dependencies .

```bash
npm install
```

## Check

##### Check the Prettier Format .

```bash
npm run prettier
```

##### Check the esLint standards .

```bash
npm run lint
```

##### This will run prettier & lint .

```bash
npm run format-code
```

## Test

##### Test with Jasmine .

```bash
npm run test
```

## Run the API

##### Check the Prettier Format .

```bash
npm run start
```

##### Or after Testing / Compiling .

```bash
node ./build/.
```

## Endpoint

#### => [http://localhost:3000/](http://localhost:3000/)

#### => [http://localhost:3000/images?img=encenadaport.jpg&width=500&height=500&format=jpg](http://localhost:3000/images?img=encenadaport.jpg&width=500&height=500&format=jpg)

## Input Rules

### 1. **_Image_**

### http://localhost:3000/images?img=

##### Input the Image Name

##### Image should be exists

### 2. **_Width_**

#### http://localhost:3000/images?img=[***image***]&width=

##### Input the Width

##### Width should not be less than 50px or more than 1000px

### 3. **_Height_**

#### http://localhost:3000/images?img=[***image***]&width=[***width***]&height=

##### Input the Height

##### Height should not be less than 50px or more than 1000px

### 4. Optional **_Format_**

#### http://localhost:3000/images?img=[***image***]&width=[***width***]&height=[***height***]

##### Leave it blank

##### Or

http://localhost:3000/images?img=[***image***]&width=[***width***]&height=[***height***]&**format=[\***format**\*]**

##### Supported Formats ( jpg | png | jpeg)

###### **jpg** is the **Default**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
