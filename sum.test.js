const sum = require('./js/sum')
const substract = require('./js/subtract')
const { expect, describe, test } = require("@jest/globals");
const {capitalize,filterOddNumber,epochDateToUTC} = require('./js/index');


//sum two numbers
test('properly add two numbers', () => {
    expect(sum(1,2)).toBe(3)
})

//substract two numbers
test('test substract function', () => {
    expect(substract(4,1)).toBe(3)
})



describe("Capitalize", () => {

    //check if the function correctly capitalize 'hello' to 'Hello'
    test("should return uppercased Hello", () => {
        const input = "hello";
        const result = capitalize(input);
        expect(result).toBe("Hello");
    });

    //to check if function can handle empty string
    test("should handle empty string", () => {
        const input = " ";
        const result = capitalize(input);
        expect(result).toBe(" ");
    });

    //to check if function can handle string with one character
    test("should handle string with only one character", () =>{
        const input = 'a';
        const result = capitalize(input);
        expect(result).toBe('A');
    })
  });

  describe("FilterOddNumber", () => {
    it("should return [2,4]", () => {
      expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
  
    it("should return []", () => {
      expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
    });
  });

  //eco date test case
describe("EpochDateToUTC", () =>{
    //test case 1
    it("should convert epoch date to UTC string" , () => {
        const epochDate = 1609459200;
        const result = epochDateToUTC(epochDate);
        expect(result).toBe("Fri, 01 Jan 2021 00:00:00 GMT");
    })

    //test case 2
    it("should handle negative epoch date", () =>{
        const epochDate = -86400;
        const result = epochDateToUTC(epochDate);
        expect(result).toBe("Wed, 31 Dec 1969 00:00:00 GMT");
    })

    //test case 3
    it("should return Thu, 01 Jan 1970 00:00:00 GMT", ()=> {
        const epochDate = 0;
        const result = epochDateToUTC(epochDate);
        expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
    })

    //test case 4
    it("should return Wed, 15 Sep 2021 12:30:45 GMT", ()=>{
        const epochDate = 1631737845;
        const result = epochDateToUTC(epochDate);
        expect(result).toBe("Wed, 15 Sep 2021 20:30:45 GMT");
    })

}) 
