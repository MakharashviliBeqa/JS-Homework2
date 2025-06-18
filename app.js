const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const mean = sum / numbers.length;

console.log(numbers);
console.log(sum);
console.log(mean);

const Phone = {
    productName: "iPhone 13",
    Storage: "128GB",
    isAvailableAt: ["Tbilisi Mall", "East Point", "Galleria", "City Mall"]
}

const Pc = {
    productName: "Lenovo Legion",
    Storage: "1TB",
    isAvailableAt: ["Tbilisi Mall", "East Point", "Galleria", "City Mall"]
}

console.log(Phone.productName + " with " + Phone.Storage + " is available at " + Phone.isAvailableAt[0] + ".");
console.log(Pc.productName + " with " + Pc.Storage + " is available at " + Pc.isAvailableAt[0] + ".");

const Books = [
    {
        title: "Book1",
        author: "Author1",
        yearPublished: 1
    },
    {
        title: "Book2",
        author: "Author2",
        yearPublished: 2
    },
    {
        title: "Book3",
        author: "Author3",
        yearPublished: 3
    }
]

console.log(Books);