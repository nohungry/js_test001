'use strict';

const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
    // es6 feature: template strings
    // note that quotes below are backticks (`), not single quotes (')
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}
