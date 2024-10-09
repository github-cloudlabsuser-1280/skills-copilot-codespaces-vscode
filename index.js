import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/
export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript
function reverseSentence(sentence) {
    if (!sentence) return '';

    // Split the sentence into words, reverse the array, and join it back into a string
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}
// Example data array
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Function to extract names from the data array
function extractNames(dataArray) {
    return dataArray.map(item => item.name);
}

// Usage
const names = extractNames(data);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
// Example nested data array
const nestedData = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 22 }
    ],
    [
        { name: 'Bob', age: 34 }
    ]
];

// Function to extract names from the nested data array
function extractNamesFromNestedArray(nestedArray) {
    return nestedArray.flatMap(innerArray => innerArray.map(item => item.name));
}

// Usage
const nestedNames = extractNamesFromNestedArray(nestedData);
console.log(nestedNames); // Output: ['John', 'Jane', 'Bob']